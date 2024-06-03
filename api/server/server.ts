import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import { openDb } from "./database";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.status(200).json({ fileUrl: `/uploads/${req.file.filename}` });
  } else {
    res.status(400).json({ error: "No file uploaded" });
  }
});

app.post("/api/products", async (req, res) => {
  const db = await openDb();
  const { id, name, price, category, imageUrl } = req.body;
  await db.run(
    "INSERT INTO products (id, name, price, category, imageUrl) VALUES (?, ?, ?, ?, ?)",
    [id, name, price, category, imageUrl]
  );
  res.status(201).json({ id, name, price, category, imageUrl });
});

app.get("/api/products", async (req, res) => {
  const db = await openDb();
  const products = await db.all("SELECT * FROM products");
  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});

(async () => {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT,
      price REAL,
      category TEXT,
      imageUrl TEXT
    )
  `);
})();
