import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5175', // URL do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
app.use(express.json());

const prisma = new PrismaClient();

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

// GET verificar e-mail
app.get('/usuarios/email/:email', async (req, res) => {
  try {
    const email = req.params.email.toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user)
      return res.status(404).json({ message: 'E-mail não encontrado' });

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuário', error: err.message });
  }
});

// Servidor
app.listen(9000, () => console.log('Backend rodando em http://localhost:9000'));
app.get('/favicon.ico', (req, res) => res.status(204).end());
