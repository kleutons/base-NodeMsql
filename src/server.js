const express = require('express');
const app = express();
const port = 3001; // Escolha a porta que desejar

// Defina as rotas e manipuladores aqui

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port} Acesse: http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
  });