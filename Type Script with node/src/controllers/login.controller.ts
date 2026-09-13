// src/controllers/login.controller.ts
import type { Request, Response } from "express";

// 1. Custom body type: fields required to log in.
export interface LoginBody {
  email: string;
  password: string;
}

export type LoginRequest = Request<
  Record<string, never>,
  unknown,
  Partial<LoginBody>
>;

export const loginUser = (req: LoginRequest, res: Response) => {
  const { email, password } = req.body;

  if (!email || typeof email !== "string" || !password || typeof password !== "string") {
    return res.status(400).json({ message: "'email' and 'password' are required" });
  }

  return res.status(200).json({ message: `Welcome back, ${email}` });
};
