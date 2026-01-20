# 🍔 Food Order Processing Queue System
**Linked List-Driven Backend with Full-Stack Implementation**

## 📋 Project Overview

This is a complete food order management system demonstrating **Data Structures & Algorithms** concepts through a real-world application. The backend uses a **Singly Linked List** to manage order queues, showcasing all major linked list operations.

## 🎯 DSA Concepts Covered

### Core Linked List Operations Implemented

| Feature | Linked List Operation | Time Complexity | Implementation |
|---------|----------------------|-----------------|----------------|
| **Normal Order** | Insert at End | O(1) | `enqueueOrder()` |
| **VIP Order** | Insert at Front | O(1) | `enqueueVIPOrder()` |
| **Complete Order** | Delete from Beginning | O(1) | `completeOrder()` |
| **Cancel Order** | Delete by Value | O(n) | `cancelOrder()` |
| **Hold Order** | Delete + Insert | O(n) | `holdOrder()` |
| **Fast Priority** | Sorted Insertion | O(n) | `enqueueFastOrder()` |
| **Search Order** | Linear Search | O(n) | `searchOrderById()` |
| **Reverse Queue** | Reverse List | O(n) | `reverseQueue()` |
| **View All** | Traversal | O(n) | `viewAllOrders()` |

## 🏗️ Architecture

```
┌─────────────────┐
│  React Frontend │  ← User Interface
└────────┬────────┘
         │ HTTP/REST
┌────────▼────────┐
│  Express API    │  ← REST Endpoints
└────────┬────────┘
         │
┌────────▼────────┐
│  Order Queue    │  ← Singly Linked List (In-Memory)
│  (Linked List)  │
└────────┬────────┘
         │
┌────────▼────────┐
│  MongoDB        │  ← Persistent Storage
└─────────────────┘
```

## 📁 Project Structure

```
my-portfolio/
├── backend/
│   ├── server.js                    # Express server
│   ├── package.json
│   ├── .env
│   ├── config/
│   │   └── database.js             # MongoDB connection
│   ├── models/
│   │   ├── OrderNode.js            # Node class definition
│   │   └── Order.js                # MongoDB schema
│   ├── dataStructures/
│   │   └── OrderQueue.js           # Linked List implementation
│   └── routes/
│       └── orderRoutes.js          # REST API endpoints
└── src/
    ├── Components/
    │   ├── OrderManagement.jsx     # Main UI component
    │   └── OrderManagement.module.css
    └── api/
        └── orderAPI.js             # API service layer
```

## 🚀 Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local or Atlas)
- **npm** or **yarn**

### 1️⃣ Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file (already created, but verify)
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/foodOrderDB
# NODE_ENV=development

# Start MongoDB (if local)
# Windows: net start MongoDB
# Mac/Linux: sudo systemctl start mongod

# Run backend server
npm start

# Or with auto-reload during development
npm run dev
```

Backend will run on: **http://localhost:5000**

### 2️⃣ Frontend Setup

```bash
# Navigate to project root
cd ..

# Install dependencies (if not already installed)
npm install

# Start React development server
npm run dev
```

Frontend will run on: **http://localhost:5173** (or the port Vite assigns)

## 🔌 API Endpoints

### Order Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/orders` | View all orders in queue |
| `GET` | `/api/orders/:orderId` | Search specific order |
| `POST` | `/api/orders` | Create normal order (insert at end) |
| `POST` | `/api/orders/vip` | Create VIP order (insert at front) |
| `POST` | `/api/orders/fast` | Create fast order (sorted by prep time) |
| `PUT` | `/api/orders/complete` | Complete next order (delete from front) |
| `DELETE` | `/api/orders/:orderId` | Cancel order (delete by ID) |
| `PUT` | `/api/orders/:orderId/hold` | Hold order (move to end) |
| `PUT` | `/api/orders/reverse` | Reverse queue order |
| `GET` | `/api/orders/peek/next` | Peek next order without removing |
| `DELETE` | `/api/orders` | Clear entire queue |
| `GET` | `/api/orders/stats/summary` | Get queue statistics |

### Example API Requests

#### Create Normal Order
```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "John Doe",
    "items": [
      {"name": "Burger", "quantity": 2, "price": 8.99},
      {"name": "Fries", "quantity": 1, "price": 3.99}
    ],
    "totalAmount": 21.97,
    "prepTime": 15
  }'
```

#### Create VIP Order
```bash
curl -X POST http://localhost:5000/api/orders/vip \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "Jane Smith",
    "items": [{"name": "Premium Steak", "quantity": 1, "price": 29.99}],
    "totalAmount": 29.99,
    "prepTime": 20
  }'
```

#### Complete Order
```bash
curl -X PUT http://localhost:5000/api/orders/complete
```

## 🎮 Using the Application

### 1. Creating Orders

- Click **"➕ New Order"** button
- Fill in customer details
- Add items with quantities and prices
- Select order type:
  - **Normal**: Added to end of queue
  - **⭐ VIP**: Added to front of queue
  - **⚡ Fast**: Inserted by prep time priority
- Click **"Create Order"**

### 2. Processing Orders

- **✅ Complete Next**: Processes the first order (FIFO)
- **⏸️ Hold**: Moves order to end of queue
- **❌ Cancel**: Removes order from queue

### 3. Queue Operations

- **🔄 Reverse Queue**: Reverses entire order sequence (end-of-day report)
- **🔍 Search**: Find order by ID and highlight position
- **🗑️ Clear All**: Remove all orders from queue

## 📊 Linked List Visualization

```
Normal Order Flow (FIFO):
HEAD → [Order101] → [Order102] → [Order103] → null
       ↑ Complete                             ↑ New Order
       (Delete)                               (Insert)

VIP Order:
[VIP-Order] → [Order101] → [Order102] → null
↑ Insert at front

Hold Order (Order102):
Before: [Order101] → [Order102] → [Order103] → null
After:  [Order101] → [Order103] → [Order102] → null

Reverse Queue:
Before: [Order101] → [Order102] → [Order103] → null
After:  [Order103] → [Order102] → [Order101] → null
```

## 🎯 Learning Objectives

### 1. **Queue Implementation**
- FIFO (First In First Out) behavior
- Enqueue and Dequeue operations

### 2. **Linked List Operations**
- Node creation and pointer manipulation
- Insert at beginning, end, and middle
- Delete from beginning, end, and middle
- Traversal and search
- List reversal

### 3. **Real-world Applications**
- Order processing systems
- Task scheduling
- Priority queues
- Event handling

### 4. **Time Complexity Analysis**
- O(1) operations: Insert at head/tail, delete from head
- O(n) operations: Search, delete by value, reverse

## 🧪 Testing the System

### Test Scenarios

1. **Basic Queue Operations**
   - Add 5 normal orders
   - Complete them one by one
   - Verify FIFO behavior

2. **VIP Priority**
   - Add 3 normal orders
   - Add 1 VIP order
   - Verify VIP is at front

3. **Fast Order Priority**
   - Add orders with different prep times (5, 15, 10 minutes)
   - Verify they're sorted by prep time

4. **Order Cancellation**
   - Add 5 orders
   - Cancel the 3rd order
   - Verify proper pointer adjustment

5. **Hold Order**
   - Add 3 orders
   - Hold the 1st order
   - Verify it moves to end

6. **Queue Reversal**
   - Add 4 orders in sequence
   - Reverse the queue
   - Verify reversed order

7. **Search Function**
   - Create multiple orders
   - Search by ID
   - Verify position reporting

## 📝 Database Schema

### Order Model (MongoDB)

```javascript
{
  orderId: String,           // Unique identifier
  customerName: String,
  items: [{
    name: String,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  prepTime: Number,          // In minutes
  status: String,            // pending, preparing, completed, cancelled, on-hold
  isVIP: Boolean,
  timestamp: Date,
  completedAt: Date
}
```

## 🔧 Troubleshooting

### MongoDB Connection Issues

```bash
# Check if MongoDB is running
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl status mongod

# Or use MongoDB Atlas (cloud)
# Update MONGODB_URI in .env with Atlas connection string
```

### CORS Issues

The backend has CORS enabled for all origins during development. For production, update:

```javascript
// server.js
app.use(cors({
  origin: 'https://your-production-domain.com'
}));
```

### Port Conflicts

If port 5000 is busy:
```bash
# Change PORT in backend/.env
PORT=5001
```

## 📈 Performance Characteristics

| Operation | Best Case | Average Case | Worst Case |
|-----------|-----------|--------------|------------|
| Enqueue (End) | O(1) | O(1) | O(1) |
| Enqueue (Front) | O(1) | O(1) | O(1) |
| Dequeue | O(1) | O(1) | O(1) |
| Search | O(1) | O(n/2) | O(n) |
| Delete by ID | O(1) | O(n/2) | O(n) |
| Reverse | O(n) | O(n) | O(n) |

## 🎓 Interview Questions Covered

1. **How do you implement a queue using linked list?**
   - See `OrderQueue.js` - `enqueueOrder()` and `completeOrder()`

2. **How do you delete a node from middle of linked list?**
   - See `cancelOrder()` method

3. **How do you reverse a linked list?**
   - See `reverseQueue()` method

4. **How do you insert at specific position?**
   - See `enqueueFastOrder()` - sorted insertion

5. **What's the difference between array and linked list for queues?**
   - Linked list: O(1) insertions/deletions at ends
   - Array: May require shifting elements

## 🚀 Future Enhancements

- [ ] WebSocket for real-time updates
- [ ] Multiple kitchen stations (parallel queues)
- [ ] Order modification after placement
- [ ] Analytics dashboard
- [ ] Payment integration
- [ ] Order history with pagination
- [ ] User authentication
- [ ] Multi-tenant support

## 📚 Additional Resources

- [Linked List Visualization](https://visualgo.net/en/list)
- [Queue ADT](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/)

## 🤝 Contributing

This is an educational project. Feel free to:
- Add new features
- Improve documentation
- Optimize algorithms
- Add unit tests

## 📄 License

MIT License - Free to use for learning and teaching purposes.

---

## 🎯 DSA Marks Checklist

✅ **Linked List Implementation** - Complete
✅ **Queue Operations** - Complete
✅ **Insert Operations** (Head, Tail, Middle) - Complete
✅ **Delete Operations** (Head, Tail, Middle) - Complete
✅ **Search & Traversal** - Complete
✅ **List Reversal** - Complete
✅ **Real-world Application** - Complete
✅ **Time Complexity Analysis** - Documented
✅ **Code Documentation** - Complete
✅ **Practical Use Case** - Order Management System

---

**Built with ❤️ for DSA Learning**
