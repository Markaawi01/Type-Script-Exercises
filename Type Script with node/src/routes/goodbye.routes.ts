// src/routes/goodbye.routes.ts
import express from "express";
import { sayGoodbye } from "../controllers/goodbye.controller";

const router = express.Router();

router.get("/", sayGoodbye);

export default router;
