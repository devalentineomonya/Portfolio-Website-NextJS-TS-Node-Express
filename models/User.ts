import { Schema, model, models, Document } from 'mongoose';

interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  isAdmin: boolean;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = models?.User || model<IUser>('User', userSchema);

export default User;
export type { IUser };
