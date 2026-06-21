async function carregarLiturgia() {
  const resposta = await fetch("/api/liturgia");

  const dados = await resposta.json();

  document.getElementById("titulo-do-dia").innerHTML = dados.titulodia;
  document.getElementById("versiculo-1l").innerHTML = dados.versiculoPl;
  document.getElementById("primeiraLeitura").innerHTML += dados.primeiraLeitura;
  document.getElementById("versiculo-sl").innerHTML = dados.versiculoSm;
  document.getElementById("salmo").innerHTML += dados.salmo;
  document.getElementById("versiculo-2l").innerHTML = dados.versiculoSl;
  document.getElementById("segundaleitura").innerHTML += dados.segundaLeitura;
  document.getElementById("versiculo-E").innerHTML = dados.versiculoE;
  document.getElementById("evangelho").innerHTML += dados.evangelho;
}

carregarLiturgia();
