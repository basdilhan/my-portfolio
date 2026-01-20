/**
 * OrderQueue.js
 * Singly Linked List implementation for Order Processing Queue
 * Head → [Order1] → [Order2] → [Order3] → null
 */

import OrderNode from '../models/OrderNode.js';

class OrderQueue {
  constructor() {
    this.head = null; // Points to first order (front of queue)
    this.tail = null; // Points to last order (end of queue)
    this.size = 0;
  }

  // 1️⃣ NORMAL ORDER PROCESSING - Insert at End (Enqueue)
  // DSA: Queue insertion at tail - O(1)
  enqueueOrder(orderData) {
    const newNode = new OrderNode(orderData);
    
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.size++;
    console.log(`✅ Order ${newNode.orderId} added to queue (Normal)`);
    return newNode;
  }

  // VIP ORDER - Insert at Front
  // DSA: Insert at head - O(1)
  enqueueVIPOrder(orderData) {
    orderData.isVIP = true;
    const newNode = new OrderNode(orderData);
    
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.size++;
    console.log(`⭐ VIP Order ${newNode.orderId} added to front`);
    return newNode;
  }

  // COMPLETE ORDER - Delete from Beginning (Dequeue)
  // DSA: Queue deletion from head - O(1)
  completeOrder() {
    if (this.isEmpty()) {
      console.log('❌ Queue is empty, no order to complete');
      return null;
    }
    
    const completedOrder = this.head;
    this.head = this.head.next;
    
    if (this.head === null) {
      this.tail = null; // Queue is now empty
    }
    
    this.size--;
    completedOrder.status = 'completed';
    console.log(`✅ Order ${completedOrder.orderId} completed and removed`);
    return completedOrder;
  }

  // 2️⃣ ORDER CANCELLATION - Delete by Order ID (Middle Deletion)
  // DSA: Deletion by value in singly linked list - O(n)
  cancelOrder(orderId) {
    if (this.isEmpty()) {
      console.log('❌ Queue is empty');
      return null;
    }

    // Special case: Cancel head order
    if (this.head.orderId === orderId) {
      const cancelled = this.head;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      this.size--;
      cancelled.status = 'cancelled';
      console.log(`❌ Order ${orderId} cancelled (was at head)`);
      return cancelled;
    }

    // Traverse to find order
    let current = this.head;
    while (current.next !== null) {
      if (current.next.orderId === orderId) {
        const cancelled = current.next;
        current.next = current.next.next;
        
        // Update tail if we cancelled last order
        if (cancelled === this.tail) {
          this.tail = current;
        }
        
        this.size--;
        cancelled.status = 'cancelled';
        console.log(`❌ Order ${orderId} cancelled (middle deletion)`);
        return cancelled;
      }
      current = current.next;
    }

    console.log(`❌ Order ${orderId} not found`);
    return null;
  }

  // 3️⃣ KITCHEN DELAY - Remove and Move to End
  // DSA: Delete + Insert (Node relocation) - O(n)
  holdOrder(orderId) {
    if (this.isEmpty()) {
      console.log('❌ Queue is empty');
      return null;
    }

    let heldOrder = null;

    // Special case: Hold head order
    if (this.head.orderId === orderId) {
      heldOrder = this.head;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      this.size--;
    } else {
      // Find and remove order
      let current = this.head;
      while (current.next !== null) {
        if (current.next.orderId === orderId) {
          heldOrder = current.next;
          current.next = current.next.next;
          
          if (heldOrder === this.tail) {
            this.tail = current;
          }
          
          this.size--;
          break;
        }
        current = current.next;
      }
    }

    if (heldOrder) {
      // Re-insert at end
      heldOrder.next = null;
      heldOrder.status = 'on-hold';
      
      if (this.isEmpty()) {
        this.head = heldOrder;
        this.tail = heldOrder;
      } else {
        this.tail.next = heldOrder;
        this.tail = heldOrder;
      }
      
      this.size++;
      console.log(`⏸️ Order ${orderId} held and moved to end`);
      return heldOrder;
    }

    console.log(`❌ Order ${orderId} not found`);
    return null;
  }

  // 4️⃣ PRIORITY BY PREP TIME - Sorted Insertion
  // DSA: Insert at specific position (sorted list) - O(n)
  enqueueFastOrder(orderData) {
    const newNode = new OrderNode(orderData);
    
    if (this.isEmpty() || this.head.prepTime > newNode.prepTime) {
      // Insert at head
      newNode.next = this.head;
      this.head = newNode;
      if (this.tail === null) {
        this.tail = newNode;
      }
    } else {
      // Find position based on prep time
      let current = this.head;
      while (current.next !== null && current.next.prepTime <= newNode.prepTime) {
        current = current.next;
      }
      
      newNode.next = current.next;
      current.next = newNode;
      
      if (newNode.next === null) {
        this.tail = newNode;
      }
    }
    
    this.size++;
    console.log(`⚡ Fast Order ${newNode.orderId} (${newNode.prepTime}min) inserted by priority`);
    return newNode;
  }

  // 5️⃣ END-OF-DAY REPORT - Reverse Linked List
  // DSA: In-place list reversal (pointer manipulation) - O(n)
  reverseQueue() {
    if (this.isEmpty() || this.head.next === null) {
      console.log('Queue has 0 or 1 order, no reversal needed');
      return;
    }

    let prev = null;
    let current = this.head;
    this.tail = this.head; // Old head becomes new tail

    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }

    this.head = prev;
    console.log('🔄 Queue reversed for end-of-day report');
  }

  // 6️⃣ SEARCH ORDER STATUS - Traversal + Search
  // DSA: Linear search in linked list - O(n)
  searchOrderById(orderId) {
    let current = this.head;
    let position = 1;

    while (current !== null) {
      if (current.orderId === orderId) {
        console.log(`🔍 Order ${orderId} found at position ${position}`);
        return {
          order: current,
          position: position
        };
      }
      current = current.next;
      position++;
    }

    console.log(`❌ Order ${orderId} not found`);
    return null;
  }

  // VIEW ALL ORDERS - Traverse
  // DSA: Linked list traversal - O(n)
  viewAllOrders() {
    if (this.isEmpty()) {
      console.log('📋 Queue is empty');
      return [];
    }

    const orders = [];
    let current = this.head;
    let position = 1;

    while (current !== null) {
      orders.push({
        position: position,
        orderId: current.orderId,
        customerName: current.customerName,
        items: current.items,
        totalAmount: current.totalAmount,
        prepTime: current.prepTime,
        status: current.status,
        isVIP: current.isVIP,
        timestamp: current.timestamp
      });
      current = current.next;
      position++;
    }

    return orders;
  }

  // Get queue statistics
  getQueueStats() {
    const orders = this.viewAllOrders();
    const stats = {
      totalOrders: this.size,
      vipOrders: orders.filter(o => o.isVIP).length,
      pendingOrders: orders.filter(o => o.status === 'pending').length,
      onHoldOrders: orders.filter(o => o.status === 'on-hold').length,
      avgPrepTime: orders.length > 0 
        ? (orders.reduce((sum, o) => sum + o.prepTime, 0) / orders.length).toFixed(1)
        : 0
    };
    return stats;
  }

  // Helper method
  isEmpty() {
    return this.head === null;
  }

  // Get head order (peek)
  peekNext() {
    return this.head;
  }

  // Clear queue
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    console.log('🗑️ Queue cleared');
  }
}

export default OrderQueue;
