// src/controllers/hello.controller.ts
import type { Request, Response } from "express";

export const sayHello = (req: Request, res: Response) => {
  const name = req.query.name;

  // Type guard to ensure name is a string
  if (typeof name !== "string") {
    return res.status(400).json({ message: "Query param 'name' must be a string" });
  }

  return res.status(200).json({ greeting: `Hello, ${name.toUpperCase()}!` });
};
