import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '@/lib/mongodb';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  const { firstName, lastName, email, image, password } = req.body;

  if (!firstName || !lastName || !email || !image || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 15);
    
    const newUser = new User({
      firstName,
      lastName,
      email,
      image,
      password: hashedPassword,
    });

    await newUser.save();
    
    const { password:_, ...userWithoutPassword } = newUser.toObject();
    res.status(201).json(userWithoutPassword);
  } catch (error:any) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    res.status(500).json({ message: 'Error creating user', error });
  }
}