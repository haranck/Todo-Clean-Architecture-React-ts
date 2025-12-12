import express from "express";
import cors from "cors";
import { envConfig } from "../config/envConfig";
import { connectMongo } from "../config/mongodbConfig";
import router from '../presentation/routes/todoRoutes'

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", router);

const start = async () => {
  try {
    await connectMongo();
    app.listen(envConfig.port, () => {
      console.log(`Server running on port ${envConfig.port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

start();
