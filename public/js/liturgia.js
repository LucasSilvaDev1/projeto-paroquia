async function carregarLiturgia() {
  const resposta = await fetch("/api/liturgia");

  const dados = await resposta.json();

  document.getElementById("titulo-do-dia").innerHTML = dados.titulodia;
  document.getElementById("versiculo-1l").innerHTML = dados.versiculoPl;
  document.getElementById("primeiraLeitura").innerHTML +=
    dados.primeiraLeitura.slice(0, -199) + `
    <p>- Palavra do Senhor.</p><p>- Graças a Deus.</p>`;
  document.getElementById("versiculo-sl").innerHTML = dados.versiculoSm;
  document.getElementById("salmo").innerHTML += dados.salmo.slice(0, -199);

  const segundaleitura = document.getElementById("segundaleitura");
  if (dados.segundaLeitura.length === 199) {
    segundaleitura.style.display = "none";
  } else {
    document.getElementById("versiculo-2l").innerHTML = dados.versiculoSl;
    document.getElementById("segundaleitura").innerHTML +=
      dados.segundaLeitura.slice(0, -199) +
      `
    <p>- Palavra do Senhor.</p><p>- Graças a Deus.</p>`;
  }

  document.getElementById("versiculo-E").innerHTML = dados.versiculoE;
  document.getElementById("evangelho").innerHTML +=
    dados.evangelho.slice(0, -199) +
    `
    <p>- Palavra da Salvação.</p><p>- Gloria a vós, Senhor.</p>`;
}

carregarLiturgia();
