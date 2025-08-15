import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const mongoUrl = process.env.DATABASE_URL;

mongoose.connect(mongoUrl);
const app = express();
const prisma = new PrismaClient();

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

// ===== ROTAS =====
app.get('/', (req, res) => res.json('hello world'));

// Exemplo CRUD
app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

// ... restante das rotas igual

// favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

// **IMPORTANTE: NÃO USAR app.listen()**
// Exporta o app para o Vercel
export default app;
