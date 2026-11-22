# Inventory Management System

## Project Overview
A backend-based Inventory Management System developed using Node.js, Express.js and MongoDB.

The application provides REST APIs to manage products, update stock, search and filter inventory, and generate inventory reports.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## Features
- Create, retrieve, update and delete products (CRUD)
- Product search and category filtering
- Sorting and pagination
- Stock adjustment
- Low-stock reporting
- Category-wise inventory summary using MongoDB Aggregation

## Installation and Setup

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Open the project folder**

```bash
cd Inventory-Management-System
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/inventoryDB
```

**5. Start MongoDB Community Server**

Ensure MongoDB is installed and running locally.

**6. Start the application**

```bash
node server.js
```

## API Base URL

`http://localhost:5000/api/products`

## API Testing

Use Postman to test the available REST API endpoints.

## Database

MongoDB is used to store product information, including product name, SKU, category, price, quantity and supplier details.
