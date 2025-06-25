const express = require('express');
const app = express();
const PORT = 3000;

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

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
