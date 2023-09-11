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
node /src/server.js
```

- Se tudo estiver configurado corretamente, seu servidor Node.js Express estará funcionando e responderá às solicitações na porta especificada (neste exemplo, a porta 3001).


7. Instalar NodeMon como dependencias de desenvolvimento, server para startar o servidor automaticamente quando esta em desenvolvimento:

```
npm i nodemon -D

```
    - Apos instalar o nodemon altere as configurações no package.json para o servior iniciar pelo nodeom:
    ```
    "scripts": {
      ...
      "dev": "nodemon src/server.js"
      },
    ```
    
    - Agora o servidor podes ser inicializado pelo comando, e sem precisar parar o servido a cada atualização:
    ```
    npm run dev
    ```

# Instalando TypeSciprt
1. Altere o arquivo `./src/server.js` para  `./src/server.ts`, mas por padrão o nodejs nao reconheçe arquivos typesciprt, ele usando somente para desenvolvimento.

2. Instalar ts-node-dev pra usar TypeSciprt
```npm
npm i ts-node-dev -D

```

3. Agora ao enves de usar o nodemon use o ts-node-dev para chamar o servidor, alterando o package.json:

```
"scripts": {
  ...
  "dev": "ts-node-dev src/server.ts"
  },

```

4. Não usar mais const para importar, ao inves disso use import from, alterar o server.ts para importa dessa manseira:
```
//const express = require('express'); // Maneira errada
import express from 'express'; // Correção

```
5. Instale as tipagem de desenvolvimento do express, isso deve ser feito em cada importação npm, pode ser necessario importar suas tipagens:
```npm
npm i @types/express -D
```