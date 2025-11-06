import mongoose, { Schema, model, Document, Model } from "mongoose";
import slugify from "slugify";

export interface IProject extends Document {
  title: string;
  details: string;
  longDetails?: string;
  category: string;
  author: string;
  liveLink?: string;
  sourceCode: string;
  backendSourceCode?: string;
  image: string;
  avatar: string;
  slug?: string;
  status: "draft" | "published";
  tags: string[];
}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    longDetails: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
    },
    sourceCode: {
      type: String,
      required: true,
    },
    backendSourceCode: {
      type: String,
      // required: true,
    },
    image: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

projectSchema.pre<IProject>("save", function (next) {
  if (this.isModified("category")) {
    this.category = this.category.split(" ").join("-").toLowerCase();
  }
  next();
});

projectSchema.pre<IProject>("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title).toLowerCase();
  }
  next();
});

const Project: Model<IProject> =
  mongoose.models.Project || model<IProject>("Project", projectSchema);

export default Project;
