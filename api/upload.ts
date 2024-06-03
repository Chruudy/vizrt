import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "api/public/uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  if (req.file) {
    res.status(200).json({ fileUrl: `/uploads/${req.file.filename}` });
  } else {
    res.status(400).json({ error: "No file uploaded" });
  }
});

export default router;
