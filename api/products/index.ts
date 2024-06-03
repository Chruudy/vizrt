import express from "express";
import { openDb } from "../server/database";

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  const db = await openDb();
  const products = await db.all("SELECT * FROM products");
  res.status(200).json(products);
});

// Add a new product
router.post("/", async (req, res) => {
  const db = await openDb();
  const { id, name, price, category, imageUrl } = req.body;
  await db.run(
    "INSERT INTO products (id, name, price, category, imageUrl) VALUES (?, ?, ?, ?, ?)",
    [id, name, price, category, imageUrl]
  );
  res.status(201).json({ id, name, price, category, imageUrl });
});

// Other routes related to products (e.g., update, delete) can be added here

export default router;
