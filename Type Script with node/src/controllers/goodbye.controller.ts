// src/controllers/goodbye.controller.ts
import type { Request, Response } from "express";

// 2. Custom query type: guarantees req.query.name is a string (or absent)
//    at the type level, matching what we still verify at runtime below.
interface GoodbyeQuery {
  name?: string;
}

// A Request whose query is typed as GoodbyeQuery instead of the default
// express-serve-static-core.ParsedQs.
export type GoodbyeRequest = Request<
  Record<string, never>,
  unknown,
  unknown,
  GoodbyeQuery
>;

export const sayGoodbye = (req: GoodbyeRequest, res: Response) => {
  const { name } = req.query;

  // 3. Handle missing/invalid param
  if (typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ message: "Query param 'name' must be a string" });
  }

  // 1. Return the farewell message
  return res.status(200).json({ farewell: `Goodbye, ${name}` });
};
