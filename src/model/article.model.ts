import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    body: Number,
    author: Number,
});

//Creating our model
export const Article = mongoose.model("Article", ArticleSchema);