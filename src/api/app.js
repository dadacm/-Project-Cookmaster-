const express = require('express');
const usersRoute = require('../routes/usersRoute');
const loginRoute = require('../routes/loginRoute');
const recipesRoute = require('../routes/recipesRoute');

const app = express();

app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', usersRoute);

app.use('/recipes', recipesRoute);

app.use('/', loginRoute);

module.exports = app;
