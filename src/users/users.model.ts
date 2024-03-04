/* eslint-disable @typescript-eslint/no-unused-vars */
import * as mongoose from 'mongoose';

//const uri = "mongodb+srv://yusrasenimdede:<password>@cluster0.3xgnzsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export interface User extends mongoose.Document {
  _id: string;
  username: string;
  password: string;
}
