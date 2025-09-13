// Importa dependências
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Servir arquivos estáticos (HTML, CSS, JS) da mesma pasta
app.use(express.static(__dirname));

// Rota para enviar o formulário
app.post("/enviar", (req, res) => {
  const { nome, email, mensagem } = req.body;

  console.log("📩 Novo formulário recebido:");
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Mensagem:", mensagem);

  // Aqui você poderia salvar em DB ou mandar por e-mail
  res.json({ sucesso: true, msg: "Formulário recebido com sucesso!" });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
