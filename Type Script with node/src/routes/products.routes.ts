// src/routes/products.routes.ts
import express from "express";
import { getProducts, updateProduct } from "../controllers/products.controller";

const router = express.Router();

router.get("/", getProducts);
router.put("/:id", updateProduct);

export default router;
