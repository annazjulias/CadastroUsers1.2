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

// ===== ROTAS =====

app.get('/', (req, res) => {
  return res.json('helo word');
});

// GET todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários', error: err.message });
  }
});

// POST novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { name, email, age, avatar } = req.body;

    const user = await prisma.user.create({
      data: { name, email, age, avatar },
    });

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .json({ message: 'Erro ao criar usuário', error: err.message });
  }
});

// PUT atualizar usuário
app.put('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age, avatar } = req.body;

    const user = await prisma.user.update({
      where: { id },
      data: { name, email, age, avatar },
    });

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(404)
      .json({ message: 'Usuário não encontrado', error: err.message });
  }
});

// DELETE usuário
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.delete({ where: { id } });

    res.status(200).json({ message: 'Usuário deletado', user });
  } catch (err) {
    console.error(err);
    res
      .status(404)
      .json({ message: 'Usuário não encontrado', error: err.message });
  }
});

// favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());
const PORT = 9000;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
export default app;
