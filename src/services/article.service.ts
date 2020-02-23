import { Request, Response } from 'express';

import { Article } from '../model/article.model';

export class PokeService {
  public welcomeMessage(req: Request, res: Response) {
    let welcomeMessage = {
        "status" : "Up"
    };      
    res.status(200).send(welcomeMessage);
  }

  public addNewArticle(req: Request, res: Response) {
    const newArticle = new Article(req.body);
    newArticle.save((error: Error, Article: any) => {
      if (error) {
        res.send(error);
      }
      res.json(Article);
    });
  }

  public getAllArticle(req: Request, res: Response) {
    Article.find({}, (error: Error, Article: any) => {
      if (error) {
        res.send(error);
      }
      res.json(Article);
    });
  }

  public deleteArticle(req: Request, res: Response) {
    const ArticleID = req.params.id;
    Article.findByIdAndDelete(ArticleID, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
      }
      const message = deleted ? 'Deleted successfully' : 'Article not found :(';
      res.status(200).send(message);
    });
  }

  public updateArticle(req: Request, res: Response) {
    const ArticleId = req.params.id;
    Article.findByIdAndUpdate(
      ArticleId,
      req.body,
      (error: Error, Article: any) => {
        if (error) {
          res.send(error);
        }
        const message = Article
          ? 'Updated successfully'
          : 'Article not found :(';
        res.send(message);
      }
    );
  }
}