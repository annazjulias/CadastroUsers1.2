import { PrismaClient } from '@prisma/client';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5175'], // frontend local
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // se não usar cookies, pode remover
  })
);

app.use(express.json());

const prisma = new PrismaClient();

// GET todos os usuários
app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

// POST novo usuário
app.post('/usuarios', async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
      avatar: req.body.avatar,
    },
  });
  res.status(201).json(user);
});

// PUT atualizar usuário
app.put('/usuarios/:id', async (req, res) => {
  const user = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });
  res.status(200).json(user);
});

// DELETE usuário
app.delete('/usuarios/:id', async (req, res) => {
  const user = await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: 'Usuário deletado', user });
});

// GET verificar e-mail
app.get('/usuarios/email/:email', async (req, res) => {
  const email = req.params.email.toLowerCase();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(404).json({ message: 'E-mail não encontrado' });
  }

  return res.status(200).json(user);
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
