import dotenv from 'dotenv';
dotenv.config(); // carregar variáveis de ambiente antes de instanciar o Prisma

import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

// GET todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
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
    res
      .status(404)
      .json({ message: 'Usuário não encontrado', error: err.message });
  }
});
app.use(cors({
  origin: 'https://cadastro-users1-2-1d4z.vercel.app'
}));


// GET verificar e-mail
app.get('/usuarios/email/:email', async (req, res) => {
  try {
    const email = req.params.email.toLowerCase();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user)
      return res.status(404).json({ message: 'E-mail não encontrado' });

    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuário', error: err.message });
  }
});

app.listen(3001, () => console.log('Backend rodando em http://localhost:3001'));
