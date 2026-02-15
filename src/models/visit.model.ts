import mongoose, { Schema, model, Document, Model } from "mongoose";

export interface IVisit extends Document {
  visitedAt: Date;
}

const visitSchema = new Schema<IVisit>(
  {
    visitedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const Visit: Model<IVisit> =
  mongoose.models.Visit || model<IVisit>("Visit", visitSchema);

export default Visit;

