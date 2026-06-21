console.log("SERVIDOR REINICIADO");
const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static("public"));

const CACHE_FILE = path.join(__dirname, "cache", "liturgia.json");

function obterDataAtual() {
  const hoje = new Date();

  const ano = hoje.getFullYear();

  const mes = String(hoje.getMonth() + 1).padStart(2, "0");

  const dia = String(hoje.getDate()).padStart(2, "0");

  return `${ano}${mes}${dia}`;
}

async function buscarLeitura(data, tipo, leitura) {
  const url = `https://feed.evangelizo.org/v2/reader.php?date=${data}&type=${tipo}&lang=PT&content=${leitura}`;

  console.log("Buscando:", url);

  const resposta = await axios.get(url);

  return resposta.data;
}

async function baixarLiturgia() {
  const data = obterDataAtual();

  const [
    titulodia,
    versiculoPl,
    primeiraLeitura,
    versiculoSm,
    salmo,
    versiculoSl,
    segundaLeitura,
    versiculoE,
    evangelho,
  ] = await Promise.all([
    buscarLeitura(data, "liturgic_t", ""),
    buscarLeitura(data, "reading_lt", "FR"),
    buscarLeitura(data, "reading", "FR"),
    buscarLeitura(data, "reading_lt", "PS"),
    buscarLeitura(data, "reading", "PS"),
    buscarLeitura(data, "reading_lt", "SR"),
    buscarLeitura(data, "reading", "SR"),
    buscarLeitura(data, "reading_lt", "GSP"),
    buscarLeitura(data, "reading", "GSP"),
  ]);
  return {
    titulodia,
    versiculoPl,
    primeiraLeitura,
    versiculoSm,
    salmo,
    versiculoSl,
    segundaLeitura,
    versiculoE,
    evangelho,
    data,
  };
}

function lerCache() {
  if (!fs.existsSync(CACHE_FILE)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
}

function salvarCache(liturgia) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(liturgia, null, 2));
}

async function obterLiturgia() {
  const cache = lerCache();

  if (cache && cache.data === obterDataAtual()) {
    return cache;
  }

  try {
    const liturgia = await baixarLiturgia();

    salvarCache(liturgia);

    return liturgia;
  } catch (erro) {
    if (cache) {
      return cache;
    }

    throw erro;
  }
}

app.get("/api/liturgia", async (req, res) => {
  try {
    const liturgia = await obterLiturgia();

    res.json(liturgia);
  } catch (erro) {
    console.error("ERRO:");
    console.error(erro);

    res.status(500).json({
      erro: erro.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
