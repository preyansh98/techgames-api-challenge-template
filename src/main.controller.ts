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
  
    this.app.route("/articles").get(this.artiService.getAllArticle);
    this.app.route("/articles").post(this.artiService.addNewArticle);

    this.app
      .route("/articles/:articleId")
      .get(this.artiService.getArticle)
      .delete(this.artiService.deleteArticle);
  }
}