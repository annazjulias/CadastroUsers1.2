import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();

// ===== MIDDLEWARES =====
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://cadastro-users1-2-1d4z.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

// ===== ROTAS =====

// Rota raiz
app.get('/', (req, res) => res.json({ message: 'Hello World' }));

// GET todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    return res
      .status(500)
      .json({ message: 'Erro ao buscar usuários', error: err.message });
  }
});

// POST criar novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { name, email, age, avatar } = req.body;

    if (!name || !email) {
      return res
        .status(400)
        .json({ message: 'Nome e email são obrigatórios.' });
    }

    const user = await prisma.user.create({
      data: { name, email, age, avatar },
    });

    return res.status(201).json(user);
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    return res
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

    return res.status(200).json(user);
  } catch (err) {
    console.error('Erro ao atualizar usuário:', err);
    return res
      .status(404)
      .json({ message: 'Usuário não encontrado', error: err.message });
  }
});

// DELETE usuário
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.delete({ where: { id } });

    return res
      .status(200)
      .json({ message: 'Usuário deletado com sucesso', user });
  } catch (err) {
    console.error('Erro ao deletar usuário:', err);
    return res
      .status(404)
      .json({ message: 'Usuário não encontrado', error: err.message });
  }
});

// favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

// ===== START SERVER =====
const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);

export default app;
