/**
 * Express Server
 * Food Order Processing System with Linked List Queue
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/orders', orderRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Food Order Queue API is running',
    timestamp: new Date()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: '🍔 Food Order Processing Queue API',
    version: '1.0.0',
    endpoints: {
      viewAllOrders: 'GET /api/orders',
      searchOrder: 'GET /api/orders/:orderId',
      createOrder: 'POST /api/orders',
      createVIPOrder: 'POST /api/orders/vip',
      createFastOrder: 'POST /api/orders/fast',
      completeOrder: 'PUT /api/orders/complete',
      cancelOrder: 'DELETE /api/orders/:orderId',
      holdOrder: 'PUT /api/orders/:orderId/hold',
      reverseQueue: 'PUT /api/orders/reverse',
      peekNext: 'GET /api/orders/peek/next',
      clearQueue: 'DELETE /api/orders',
      statistics: 'GET /api/orders/stats/summary'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 API Documentation: http://localhost:${PORT}/`);
});

export default app;
