import { Request, Response } from 'express';

import { Article } from '../model/article.model';
import mongoose from "mongoose";

export class ArtiService {
  public welcomeMessage(req: Request, res: Response) {
    let welcomeMessage = {
      "status": "Up"
    };
    res.status(200).send(welcomeMessage);
  }

  public addNewArticle(req: Request, res: Response) {
    const newArticle = new Article(req.body);
    if (!req.body.title || !req.body.subtitle || !req.body.body || !req.body.author) {
      res.status(400).send("Invalid Article!");
    } else {
      newArticle.save((error: Error, Article: any) => {
        if (error) {
            res.status(500).send(error);
        } else
          res.status(200).json(Article);
      });
    }
  }

  public getArticle(req: Request, res: Response) {
    const ArticleID = req.params.articleId;
    Article.findById(ArticleID, (error: Error, Article: any) => {
      if (error) {
        if (req.params.articleId.length < 12) {
          res.status(400).send("Article id wrong format")
        }
        else {
          res.status(404).send("No such article!");
        }
      }
      else {
        if(Article == null)
          res.status(404).send("No such article!");
        else
         res.status(200).json(Article);
      }
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
    const ArticleID = req.params.articleId;
    Article.findByIdAndDelete(ArticleID, (error: Error, deleted: any) => {
      if (error) {
        if (!req.params.articleId || req.params.articleId.length < 12)
          res.status(400).send("Invalid ID");
        else
          res.status(404).send(error);
      } else{
        if(deleted == null)
          res.status(404).send("No such article!");
        else 
          res.status(200).json(deleted);
      }
    });
  }

  public updateArticle(req: Request, res: Response) {
    const ArticleId = req.params.articleId;
    Article.findByIdAndUpdate(
      ArticleId,
      req.body,
      (error: Error, Article: any) => {
        if (error) {
          if (!req.params.articleId || req.params.articleId.length < 12)
            res.status(400).send("Invalid ID");
          else
            res.status(404).send(error);
        }
        else {
          Article.findById(ArticleId, (error: Error, Article: any) => {
            if (error)
              res.status(404).send("No such article!");
            else
              if(Article == null)
                res.status(404).send("No such article!");
              else
                res.status(200).json(Article);
          });
        }
      }
    );
  }
}