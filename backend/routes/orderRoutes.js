/**
 * Order Routes
 * REST API endpoints for all linked list operations
 */

import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import Order from '../models/Order.js';

const router = express.Router();

// Global order queue instance (in-memory linked list)
import OrderQueue from '../dataStructures/OrderQueue.js';
const orderQueue = new OrderQueue();

// 📊 GET /api/orders - View All Orders (Traverse)
router.get('/', async (req, res) => {
  try {
    const orders = orderQueue.viewAllOrders();
    const stats = orderQueue.getQueueStats();
    
    res.json({
      success: true,
      data: {
        orders,
        stats
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 🔍 GET /api/orders/:orderId - Search Order by ID
router.get('/:orderId', async (req, res) => {
  try {
    const result = orderQueue.searchOrderById(req.params.orderId);
    
    if (!result) {
      return res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }
    
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ➕ POST /api/orders - Create Normal Order (Insert at End)
router.post('/', async (req, res) => {
  try {
    const orderData = {
      orderId: `ORD${uuidv4().slice(0, 8).toUpperCase()}`,
      customerName: req.body.customerName,
      items: req.body.items,
      totalAmount: req.body.totalAmount,
      prepTime: req.body.prepTime || 10,
      timestamp: new Date()
    };

    // Add to linked list queue
    const node = orderQueue.enqueueOrder(orderData);
    
    // Save to database
    const dbOrder = new Order(orderData);
    await dbOrder.save();
    
    res.status(201).json({
      success: true,
      message: 'Order added to queue',
      data: node
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ⭐ POST /api/orders/vip - Create VIP Order (Insert at Front)
router.post('/vip', async (req, res) => {
  try {
    const orderData = {
      orderId: `VIP${uuidv4().slice(0, 8).toUpperCase()}`,
      customerName: req.body.customerName,
      items: req.body.items,
      totalAmount: req.body.totalAmount,
      prepTime: req.body.prepTime || 10,
      isVIP: true,
      timestamp: new Date()
    };

    // Add to front of linked list queue
    const node = orderQueue.enqueueVIPOrder(orderData);
    
    // Save to database
    const dbOrder = new Order(orderData);
    await dbOrder.save();
    
    res.status(201).json({
      success: true,
      message: 'VIP Order added to front of queue',
      data: node
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ⚡ POST /api/orders/fast - Fast Order (Priority by Prep Time)
router.post('/fast', async (req, res) => {
  try {
    const orderData = {
      orderId: `FST${uuidv4().slice(0, 8).toUpperCase()}`,
      customerName: req.body.customerName,
      items: req.body.items,
      totalAmount: req.body.totalAmount,
      prepTime: req.body.prepTime || 5,
      timestamp: new Date()
    };

    // Insert based on prep time priority
    const node = orderQueue.enqueueFastOrder(orderData);
    
    // Save to database
    const dbOrder = new Order(orderData);
    await dbOrder.save();
    
    res.status(201).json({
      success: true,
      message: 'Fast order inserted by priority',
      data: node
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ PUT /api/orders/complete - Complete Order (Delete from Beginning)
router.put('/complete', async (req, res) => {
  try {
    const completedOrder = orderQueue.completeOrder();
    
    if (!completedOrder) {
      return res.status(404).json({ 
        success: false, 
        message: 'No orders in queue' 
      });
    }
    
    // Update in database
    await Order.findOneAndUpdate(
      { orderId: completedOrder.orderId },
      { status: 'completed', completedAt: new Date() }
    );
    
    res.json({
      success: true,
      message: 'Order completed',
      data: completedOrder
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ❌ DELETE /api/orders/:orderId - Cancel Order (Delete by ID)
router.delete('/:orderId', async (req, res) => {
  try {
    const cancelledOrder = orderQueue.cancelOrder(req.params.orderId);
    
    if (!cancelledOrder) {
      return res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }
    
    // Update in database
    await Order.findOneAndUpdate(
      { orderId: req.params.orderId },
      { status: 'cancelled' }
    );
    
    res.json({
      success: true,
      message: 'Order cancelled',
      data: cancelledOrder
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ⏸️ PUT /api/orders/:orderId/hold - Hold Order (Move to End)
router.put('/:orderId/hold', async (req, res) => {
  try {
    const heldOrder = orderQueue.holdOrder(req.params.orderId);
    
    if (!heldOrder) {
      return res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }
    
    // Update in database
    await Order.findOneAndUpdate(
      { orderId: req.params.orderId },
      { status: 'on-hold' }
    );
    
    res.json({
      success: true,
      message: 'Order held and moved to end',
      data: heldOrder
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 🔄 PUT /api/orders/reverse - Reverse Queue (End-of-Day Report)
router.put('/reverse', async (req, res) => {
  try {
    orderQueue.reverseQueue();
    const reversedOrders = orderQueue.viewAllOrders();
    
    res.json({
      success: true,
      message: 'Queue reversed for end-of-day report',
      data: reversedOrders
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 👁️ GET /api/orders/peek/next - Peek Next Order
router.get('/peek/next', async (req, res) => {
  try {
    const nextOrder = orderQueue.peekNext();
    
    if (!nextOrder) {
      return res.status(404).json({ 
        success: false, 
        message: 'No orders in queue' 
      });
    }
    
    res.json({
      success: true,
      data: nextOrder
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 🗑️ DELETE /api/orders - Clear All Orders
router.delete('/', async (req, res) => {
  try {
    orderQueue.clear();
    
    res.json({
      success: true,
      message: 'Queue cleared'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 📊 GET /api/orders/stats/summary - Get Queue Statistics
router.get('/stats/summary', async (req, res) => {
  try {
    const stats = orderQueue.getQueueStats();
    const dbStats = await Order.countDocuments();
    
    res.json({
      success: true,
      data: {
        queueStats: stats,
        totalOrdersInDB: dbStats
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
