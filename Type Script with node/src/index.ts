// src/server.ts
import express from "express";
import helloRoutes from "./routes/hello.routes";
import goodbyeRoutes from "./routes/goodbye.routes";
import loginRoutes from "./routes/login.routes";
import productsRoutes from "./routes/products.routes";

const app = express();
app.use(express.json());

app.use("/hello", helloRoutes);
app.use("/goodbye", goodbyeRoutes);
app.use("/login", loginRoutes);
app.use("/products", productsRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
