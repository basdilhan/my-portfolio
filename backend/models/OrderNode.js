/**
 * OrderNode.js
 * Represents a single node in the order queue linked list
 * Each order is a node with data and a pointer to the next order
 */

class OrderNode {
  constructor(orderData) {
    this.orderId = orderData.orderId;
    this.customerName = orderData.customerName;
    this.items = orderData.items; // Array of food items
    this.totalAmount = orderData.totalAmount;
    this.prepTime = orderData.prepTime; // Preparation time in minutes
    this.status = orderData.status || 'pending'; // pending, preparing, completed, cancelled
    this.isVIP = orderData.isVIP || false;
    this.timestamp = orderData.timestamp || new Date();
    this.next = null; // Pointer to next order node
  }
}

export default OrderNode;
