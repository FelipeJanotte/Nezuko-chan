const express = require('express');
const app = express();

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);
// Recebe solicitações

const Discord = require("discord.js");
// Conexão com lib Discord.js

const client = new Discord.Client();
// Criação de um novo client

const config = require("./config.json");
// Recebendo configurações

client.login(process.env.TOKEN);
// Ligar BOT - Caso conseguir acessar o TOKEN
