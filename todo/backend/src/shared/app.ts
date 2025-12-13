import express, { Express } from "express";
import cors from "cors";
import { envConfig } from "../config/envConfig";
import { connectMongo } from "../config/mongodbConfig";
import { TodoRoutes } from "../presentation/routes/todoRoutes";

export class App {
  private readonly app: Express;

  constructor() {
    this.app = express();
    this.configMiddlewares();
    this.configRoutes();
  }

  private configMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private configRoutes(): void {
    const todoRoutes = new TodoRoutes();
    this.app.use("/api/todos", todoRoutes.getRoutes());
  }

  private async connectDatabase(): Promise<void> {
    await connectMongo();
  }

  public async listen(): Promise<void> {
    try {
      await this.connectDatabase();
      this.app.listen(envConfig.port, () => {
        console.log(`Server running on port ${envConfig.port}`);
      });
    } catch (error) {
      console.error("Failed to start server", error);
      process.exit(1);
    }
  }
}


