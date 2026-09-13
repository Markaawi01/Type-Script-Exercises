// src/controllers/products.controller.ts
import type { Request, Response } from "express";

// 2. GET /products?page=1&limit=10 — query params always arrive as strings.
export interface ProductQuery {
  page?: string;
  limit?: string;
}

export type ProductsListRequest = Request<
  Record<string, never>,
  unknown,
  unknown,
  ProductQuery
>;

export const getProducts = (req: ProductsListRequest, res: Response) => {
  const { page = "1", limit = "10" } = req.query;
  const pageNum = Number(page);
  const limitNum = Number(limit);

  if (!Number.isInteger(pageNum) || pageNum < 1 || !Number.isInteger(limitNum) || limitNum < 1) {
    return res.status(400).json({ message: "'page' and 'limit' must be positive integers" });
  }

  return res.status(200).json({ message: `Page ${pageNum} with ${limitNum} items` });
};

// 3. PUT /products/:id — params + body typing.
export interface ProductParams {
  id: string;
}

export interface UpdateProductBody {
  name: string;
  price: number;
}

export type UpdateProductRequest = Request<
  ProductParams,
  unknown,
  Partial<UpdateProductBody>
>;

export const updateProduct = (req: UpdateProductRequest, res: Response) => {
  const { id } = req.params;
  const { name, price } = req.body;

  if (!name || typeof name !== "string" || typeof price !== "number") {
    return res.status(400).json({ message: "'name' (string) and 'price' (number) are required" });
  }

  console.log(`Updating product ${id}:`, { name, price });

  return res.status(200).json({ id, name, price });
};
