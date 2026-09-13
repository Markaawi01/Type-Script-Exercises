# Exercise 12: `LoginBody`, typed query, and `params + body`

Code lives inside the main **Type Script with node** project, reusing its
existing `src/routes` and `src/controllers` folders:

- [`src/controllers/login.controller.ts`](../../src/controllers/login.controller.ts)
- [`src/routes/login.routes.ts`](../../src/routes/login.routes.ts)
- [`src/controllers/products.controller.ts`](../../src/controllers/products.controller.ts)
- [`src/routes/products.routes.ts`](../../src/routes/products.routes.ts)
- Wired up in [`src/index.ts`](../../src/index.ts) via
  `app.use("/login", loginRoutes)` and `app.use("/products", productsRoutes)`

## Instructions

1. **`LoginBody` type**
   - Fields: `email: string`, `password: string`
   - Used in a `loginUser` controller
   - `400 Bad Request` if any field is missing

2. **Typing a GET route with query**
   - Route: `/products?page=1&limit=10`
   - `ProductQuery` type
   - Responds `Page X with Y items`

3. **Typing a route with `params + body`**
   - Route: `PUT /products/:id`
   - Params: `id: string`
   - Body: `{ name: string, price: number }`
   - Logs both values, returns them in the response

## Try it

```bash
cd ../..
npm run dev
```

- `POST http://localhost:3000/login` with JSON body `{ "email": "a@b.com", "password": "secret" }`
  → `200 { "message": "Welcome back, a@b.com" }`
- `POST http://localhost:3000/login` with `{ "email": "a@b.com" }`
  → `400 { "message": "'email' and 'password' are required" }`
- `GET http://localhost:3000/products?page=2&limit=5`
  → `200 { "message": "Page 2 with 5 items" }`
- `PUT http://localhost:3000/products/42` with JSON body `{ "name": "Mouse", "price": 19.99 }`
  → `200 { "id": "42", "name": "Mouse", "price": 19.99 }` (and logs both values server-side)
