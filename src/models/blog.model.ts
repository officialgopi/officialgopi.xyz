import mongoose from "mongoose";

export interface IBlog extends mongoose.Document {
  title: string;
  content: string;
  date: Date;
}

const blogSchema = new mongoose.Schema<IBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Blog = mongoose.model<IBlog>("Blog", blogSchema);
