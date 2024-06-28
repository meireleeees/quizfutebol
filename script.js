let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Maior clube do Mundo",
    alternativaA : "Real Madrid",
    alternativaB : "VASCO",
    alternativaC : "Chorinthians",
    correta      : "VASCO",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual o nome da Torcida Organizada do Corinthians?",
    alternativaA : "Gaviões da Fiel",
    alternativaB : "Independente",
    alternativaC : "Mancha Verde",
    correta      : "Gaviões da Fiel",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Quem torce pro São Paulo é o que?",
    alternativaA : "Desempregado",
    alternativaB : "Muambeiro",
    alternativaC : "São paulino",
    correta      : "Muambeiro",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Quem foi o melhor no auge?",
    alternativaA : "Romário",
    alternativaB : "Ronaldo",
    alternativaC : "Bebeto",
    correta      : "Ronaldo",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "a Premier League se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "Europa",
}
const q6 = {
  numQuestao   : 6,
  pergunta     : " Quantas Copas a Alemanha tem?",
  alternativaA : "3",
  alternativaB : "4",
  alternativaC : "5",
  correta      : "3",
}
const q7 = {
  numQuestao   : 7,
  pergunta     : "Quem foi o ultimo Golden Boy?",
  alternativaA : "Gavi",
  alternativaB : "Pedri",
  alternativaC : "Cristiano Ronaldo",
  correta      : "Gavi",
}
const q8 = {
  numQuestao   : 8,
  pergunta     : "Qual é o mascote do Bahia?",
  alternativaA : "Super-Homem",
  alternativaB : "Vozão",
  alternativaC : "Homem Aranha",
  correta      : "Super-Homem",
}
const q9 = {
  numQuestao   : 9,
  pergunta     : "Que time foi campeão do Campeonato Brasileiro(Brasileirão) de 1985?",
  alternativaA : "Corinthians",
  alternativaB : "Coritiba",
  alternativaC : "Grêmio",
  correta      : "Coritiba",
}
const q10 = {
  numQuestao   : 10,
  pergunta     : "Qual dos times abaixo não faz parte da região sudeste do Brasil?",
  alternativaA : "Oeste",
  alternativaB : "Internacional",
  alternativaC : "Brasil de Pelotas",
  correta      : "Oeste",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}