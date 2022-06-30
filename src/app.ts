import express from "express";
import cors from "cors";
import { router } from "./routes";

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.cors();
    this.middleware();
    this.router();
  }

  private cors() {
    this.server.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
  }

  private middleware() {
    this.server.use(express.json());
  }

  private router() {
    this.server.use(router);
  }
}
