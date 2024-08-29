import express from "express";
import dotenv from "dotenv";
import autobotsRoutes from "./routes/autobotsRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", autobotsRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

export default app;
