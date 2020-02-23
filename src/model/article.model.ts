import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    body: String,
    author: String,
});

//Creating our model
export const Article = mongoose.model("Article", ArticleSchema);