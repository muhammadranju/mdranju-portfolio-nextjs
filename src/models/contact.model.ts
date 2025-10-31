import mongoose, { Schema, model, Document, Model } from "mongoose";

interface IContact extends Document {
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  message: string;
  country: string;
}

const contactSchema = new Schema<IContact>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact: Model<IContact> =
  mongoose.models.Contact || model<IContact>("Contact", contactSchema);

export default Contact;
