async function carregarLiturgia() {
  const resposta = await fetch("/api/liturgia");

  const dados = await resposta.json();

  document.getElementById("titulo-do-dia").innerHTML = dados.titulodia;
  document.getElementById("versiculo-1l").innerHTML = dados.versiculoPl;
  document.getElementById("primeiraLeitura").innerHTML +=
    dados.primeiraLeitura.slice(0, -199);
  document.getElementById("versiculo-sl").innerHTML = dados.versiculoSm;
  document.getElementById("salmo").innerHTML += dados.salmo.slice(0, -199);

  const segundaleitura = document.getElementById("segundaleitura");
  if (dados.segundaLeitura.length === 199) {
    segundaleitura.style.display = "none";
  }
  document.getElementById("versiculo-2l").innerHTML = dados.versiculoSl;
  document.getElementById("segundaleitura").innerHTML += dados.segundaLeitura.slice(0, -199,
  );
  document.getElementById("versiculo-E").innerHTML = dados.versiculoE;
  document.getElementById("evangelho").innerHTML += dados.evangelho.slice(0, -199);
}

carregarLiturgia();
