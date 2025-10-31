import mongoose, { Schema, model, Document, Model } from "mongoose";

export interface IStats extends Document {
  totalVisitors: number;
  totalVisits: number; // Optional: for total hits, even duplicates
  updatedAt: Date;
}

const statsSchema = new Schema<IStats>(
  {
    totalVisitors: {
      type: Number,
      default: 0,
    },
    totalVisits: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

statsSchema.index({ updatedAt: 1 });

const Stats: Model<IStats> =
  mongoose.models.Stats || model<IStats>("Stats", statsSchema);

export default Stats;
