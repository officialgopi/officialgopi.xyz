import mongoose from "mongoose";

export interface ICount extends mongoose.Document {
  blogCount: number;
}

const countSchema = new mongoose.Schema<ICount>({
  blogCount: {
    type: Number,
    required: true,
  },
});

export const CountModel = mongoose.model<ICount>("Count", countSchema);
