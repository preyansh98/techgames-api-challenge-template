import { ArtiService } from "./services/article.service";
import { Application } from "express";

export class Controller {
  private artiService: ArtiService;

  constructor(private app: Application) {
    this.artiService = new ArtiService();
    this.routes();
  }

  public routes() {
    this.app.route("/").get(this.artiService.welcomeMessage);

}