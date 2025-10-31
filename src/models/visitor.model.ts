// models/visitor.model.ts
import mongoose, { Schema, model, Document, Model } from "mongoose";

export interface IVisitor extends Document {
  hash: string; // Unique identifier (hash of IP + User-Agent)
  ip: string;
  userAgent: string;
  visitedAt: Date;
}

const visitorSchema = new Schema<IVisitor>(
  {
    hash: {
      type: String,
      required: true,
      unique: true,
    },
    ip: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
    visitedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Visitor: Model<IVisitor> =
  mongoose.models.Visitor || model<IVisitor>("Visitor", visitorSchema);

export default Visitor;
