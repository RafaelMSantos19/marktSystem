require('dotenv').config();

const express = require('express');
const { Produto } = require('./models');
const app = express();
const PORT = process.env.PORT;

// Middleware para aceitar JSON no corpo da requisição
app.use(express.json());

// Rota GET simples
app.get('/', (req, res) => {
  res.send('API Node com Express está no ar!');
});

// Rota de exemplo: listar usuários
app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' }
  ]);
});

// Rota de exemplo: criar usuário
app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  // Aqui você normalmente salvaria no banco de dados
  res.status(201).json({ mensagem: 'Usuário criado!', usuario });
});

app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
    res.status(500).json({ erro: 'Erro interno ao buscar produtos' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
