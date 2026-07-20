function obterDataAtual() {
  const hoje = new Date();
  const ano = String(hoje.getFullYear());
  const mes = String(hoje.getMonth());
  const dia = String(hoje.getDate());
  const diaSemana = hoje.getDay().toString()
  const nomeMes = ["JAN","FEV","MAR","ABR","MAY","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]
  const nomeDia = ["Segunda-feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado", "Domingo" ]
 
  const Dia = document.getElementById('dia')
  const Mes = document.getElementById('mes')
  const Ano = document.getElementById('ano')
  const NomeSemana = document.getElementById('nome-dia')

  Dia.innerText = dia
  Mes.innerText = nomeMes[mes]
  Ano.innerText = ano
  NomeSemana.innerText = nomeDia[diaSemana-1]
}
obterDataAtual()