import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();
const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://cadastro-users1-2-1d4z.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
app.use(express.json());

app.get('/', (req, res) => res.json('hello world'));

app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

// favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

export default app;
