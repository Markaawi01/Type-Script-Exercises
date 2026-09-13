# Exercise 11: `/goodbye` route

The code for this exercise lives inside the main **Type Script with node**
project, reusing its existing `src/routes` and `src/controllers` folders
(rather than duplicating the Express/TypeScript setup here):

- [`src/controllers/goodbye.controller.ts`](../../src/controllers/goodbye.controller.ts)
- [`src/routes/goodbye.routes.ts`](../../src/routes/goodbye.routes.ts)
- Wired up in [`src/index.ts`](../../src/index.ts) via `app.use("/goodbye", goodbyeRoutes)`

## Instructions

1. **Create a `/goodbye` route**
   - Controller `sayGoodbye`
   - Accepts query param `name` (string)
   - Returns `{ farewell: "Goodbye, {name}" }`

2. **Type the query**
   - A custom request type guarantees `req.query.name` is typed as a string
     (`GoodbyeQuery` / `GoodbyeRequest` in the controller file)

3. **Handle a missing param**
   - Responds `400` with `{ message: "Query param 'name' must be a string" }`
     if `name` is missing or not a string

## Try it

```bash
cd ../..
npm run dev
```

- `GET http://localhost:3000/goodbye?name=Hamza` → `200 { "farewell": "Goodbye, Hamza" }`
- `GET http://localhost:3000/goodbye` → `400 { "message": "Query param 'name' must be a string" }`
