# Projeto Base para um servidor Node.js com banco de dados MySQl
1. Primeiro crie uma pasta para o seu projeto e acesse-a pelo terminal, exemplo:
```
mkdir base-NodeMySQL
```

2. Inicialize um projeto Node.js executando:
Isso criará um arquivo package.json com as informações do seu projeto.
```
npm init -y
```

3. Instale o Express como uma dependência do seu projeto usando o seguinte comando:

```
npm install express
```

4. Crie uma pasta chamada ‘src’ e dentro  um arquivo JavaScript  (por exemplo, server.js) para iniciar seu servidor e importe o Express:

```
const express = require('express');
const app = express();
const port = 3001; // Escolha a porta que desejar

// Defina as rotas e manipuladores aqui

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
```

5. Agora, você pode definir as rotas e manipuladores para seu aplicativo Express. Por exemplo, para criar uma rota simples que responde a uma solicitação GET

```
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});
```

6. Inicie o servidor executando o arquivo JavaScript que você criou (no exemplo acima, server.js):

```
node server.js 
```

- Se tudo estiver configurado corretamente, seu servidor Node.js Express estará funcionando e responderá às solicitações na porta especificada (neste exemplo, a porta 3001).
