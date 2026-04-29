const express = require("express");
const app = express();

// rota inicial
app.get("/", function(req, res) {
    res.send("<h1>Página Inicial</h1><p>Bem-vindo!</p>");
});

// rota sobre
app.get("/sobre", function(req, res) {
    res.send("<h1>Sobre</h1><p>Projeto desenvolvido por Daniel para a disciplina de Cloud.</p>");
});

// rota com parâmetro
app.get("/consulta/:item", function(req, res) {
    res.send("<h1>Resultado da consulta: " + req.params.item + "</h1>");
});

app.listen(process.env.PORT ?? 3000, function(erro) {
    if (erro) {
        console.log("Erro ao iniciar.");
    } else {
        console.log("Servidor iniciado.");
    }
});