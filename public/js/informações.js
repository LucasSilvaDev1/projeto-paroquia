const btArtig = document.getElementById("bt-artig");
const btHora = document.getElementById("bt-hora");
const btPasto = document.getElementById("bt-pasto");

function ativarbtnSeletor(id) {
  const btns = document.querySelectorAll(".btn-seletor");
  const btn = document.getElementById(id);
  const container = document.getElementById("container-info")

  if (btn.classList.contains("btn-ativo")) {
    btn.classList.remove("btn-ativo")
    container.innerHTML = ``
  } else {
    btns[0].classList.remove("btn-ativo");
    btns[1].classList.remove("btn-ativo");
    btns[2].classList.remove("btn-ativo");
    btn.classList.add("btn-ativo");
    if (btn.id == "bt-artig") {
      container.innerHTML = `
        <section class="artigos">
            <article class="artigo">
              <div class="imgArt"><img src="img/foto-artigo.png" alt=""></div>
              <div class="tituloArt">
                <h1>- Encerramento da festa de Santo Antônio -</h1>
                <p>16/07/26</p>
              </div>
            </article>
            <article class="artigo">
              <div class="imgArt"><img src="img/foto-artigo.png" alt=""></div>
              <div class="tituloArt">
                <h1>- Encerramento da festa de Santo Antônio -</h1>
                <p>16/07/26</p>
              </div>
            </article>
            <article class="artigo">
              <div class="imgArt"><img src="img/foto-artigo.png" alt=""></div>
              <div class="tituloArt">
                <h1>- Encerramento da festa de Santo Antônio -</h1>
                <p>16/07/26</p>
              </div>
            </article>
            <article class="artigo">
              <div class="imgArt"><img src="img/foto-artigo.png" alt=""></div>
              <div class="tituloArt">
                <h1>- Encerramento da festa de Santo Antônio -</h1>
                <p>16/07/26</p>
              </div>
            </article>
            <article class="artigo">
              <div class="imgArt"><img src="img/foto-artigo.png" alt=""></div>
              <div class="tituloArt">
                <h1>- Encerramento da festa de Santo Antônio -</h1>
                <p>16/07/26</p>
              </div>
            </article>
            <article class="artigo">
              <div class="imgArt"><img src="img/foto-artigo.png" alt=""></div>
              <div class="tituloArt">
                <h1>- Encerramento da festa de Santo Antônio -</h1>
                <p>16/07/26</p>
              </div>
            </article>
          </section>
          <button class="btn-MaisArtigos">Mais Artigos +</button>
        `;
    } else if (btn.id == "bt-hora") {
      container.innerHTML = `
                  <section class="horarios">
            <div class="btns-dias">
              <button id="btDom" onclick="selecionarDia(id)" class="btn-dia btn-dia-ativo">DOM</button>
              <button id="btSeg" onclick="selecionarDia(id)" class="btn-dia">SEG</button>
              <button id="btTer" onclick="selecionarDia(id)" class="btn-dia">TER</button>
              <button id="btQua" onclick="selecionarDia(id)" class="btn-dia">QUA</button>
              <button id="btQui" onclick="selecionarDia(id)" class="btn-dia">QUI</button>
              <button id="btSex" onclick="selecionarDia(id)" class="btn-dia">SEX</button>
              <button id="btSab" onclick="selecionarDia(id)" class="btn-dia">SAB</button>
            </div>
            <div class="hora-turno">
              <div class="manha">
                <h1>Manhã</h1>
                <p>8h - Santa Missa</p>
                <p>---</p>
              </div>
              <div class="tarde">
                <h1>Tarde</h1>
                <p>---</p>
              </div>
              <div class="noite">
                <h1>Noite</h1>
                <p>19h - Santa Missa</p>
                <p>---</p>
              </div>
            </div>
            <div class="obs"><p>*Os horários podem mudar eventualmente, para saber mais, visite nosso instagram onde postamos atualizações quando necessárias*</p></div>
          </section>
        `;
    } else if (btn.id == "bt-pasto") {
      container.innerHTML = `
                  <section class="pastorais">
                <h1>Pastorais e movimentos de nossa Paroquia</h1>
            <section class="section-pastoral">
              <div class="pastoral"><img src="img/foto-pastoral.jpg" alt="">
                <h1>Pastoral de Nossa Senhora do Perpetuo socorro</h1>
              </div>
              <div class="pastoral"><img src="img/foto-pastoral.jpg" alt="">
                <h1>Pastoral de Nossa Senhora do Perpetuo socorro</h1>
              </div>
              <div class="pastoral"><img src="img/foto-pastoral.jpg" alt="">
                <h1>Pastoral de Nossa Senhora do Perpetuo socorro</h1>
              </div>
              <div class="pastoral"><img src="img/foto-pastoral.jpg" alt="">
                <h1>Pastoral de Nossa Senhora do Perpetuo socorro</h1>
              </div>
            </section>
          </section>
          <button class="verPastorais">Ver Mais +</button>
        `;
    }
  }
      
}

function selecionarDia(id) {
  const btns = document.querySelectorAll(".btn-dia");
  const btn = document.getElementById(id);

  const manha = document.querySelector(".manha");
  const tarde = document.querySelector(".tarde");
  const noite = document.querySelector(".noite");

  btns[0].classList.remove("btn-dia-ativo");
  btns[1].classList.remove("btn-dia-ativo");
  btns[2].classList.remove("btn-dia-ativo");
  btns[3].classList.remove("btn-dia-ativo");
  btns[4].classList.remove("btn-dia-ativo");
  btns[5].classList.remove("btn-dia-ativo");
  btns[6].classList.remove("btn-dia-ativo");

  btn.classList.add("btn-dia-ativo");

    //  BOTÁO DOMINGO
  if (btn.id == "btDom") {
    manha.innerHTML = `
        <h1>Manhã</h1>
                <p>8h - Santa Missa</p>
                <p>---</p>
        `;
    tarde.innerHTML = `
    <h1>Tarde</h1>
            <p>---</p>
    `;
    noite.innerHTML = `
    <h1>Noite</h1>
            <p>19h - Santa Missa</p>
            <p>---</p>
    `;
    }
    // BOTÁO SEGUNDA
  if (btn.id == "btSeg") {
    manha.innerHTML = `
            <h1>Manhã</h1>
                    <p>---</p>
            `;
    tarde.innerHTML = `
        <h1>Tarde</h1>
                <p>---</p>
        `;
    noite.innerHTML = `
        <h1>Noite</h1>
                <p>18h - Terço dos Homens</p>
                <p>---</p>
        `;
    }
    // BOTÃO TERÇA
  if (btn.id == "btTer") {
    manha.innerHTML = `
            <h1>Manhã</h1>
                    <p>---</p>
            `;
    tarde.innerHTML = `
        <h1>Tarde</h1>
                <p>---</p>
        `;
    noite.innerHTML = `
        <h1>Noite</h1>
                <p>---</p>
        `;
    }
    // BOTÃO QUARTA
  if (btn.id == "btQua") {
    manha.innerHTML = `
            <h1>Manhã</h1>
                    <p>---</p>
            `;
    tarde.innerHTML = `
        <h1>Tarde</h1>
                <p>---</p>
        `;
    noite.innerHTML = `
        <h1>Noite</h1>
                <p>18h - Terço das Mães que oram pelos filhos</p>
                <p>---</p>
        `;
    }
    // BOTÃO QUINTA
  if (btn.id == "btQui") {
    manha.innerHTML = `
            <h1>Manhã</h1>
                    <p>---</p>
            `;
    tarde.innerHTML = `
        <h1>Tarde</h1>
                <p>15h - Adoração ao Santissimo Sacramento</p>
                <p>17h - Terço das Mulheres</p>
                <p>---</p>
        `;
    noite.innerHTML = `
        <h1>Noite</h1>
                <p>18h - Santa Missa</p>
                <p>---</p>
        `;
    }
    // BOTÃO SEXTA
  if (btn.id == "btSex") {
    manha.innerHTML = `
            <h1>Manhã</h1>
                    <p>---</p>
            `;
    tarde.innerHTML = `
        <h1>Tarde</h1>
                <p>---</p>
        `;
    noite.innerHTML = `
        <h1>Noite</h1>
                <p>---</p>
        `;
    }
    // BOTÃO SABADO
  if (btn.id == "btSab") {
    manha.innerHTML = `
            <h1>Manhã</h1>
                    <p>---</p>
            `;
    tarde.innerHTML = `
        <h1>Tarde</h1>
                <p>---</p>
        `;
    noite.innerHTML = `
        <h1>Noite</h1>
                <p>---</p>
        `;
  }
}
