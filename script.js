const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o nome completo do protagonista da série Harry Potter?",
        alternativas: [
            {
                texto: "Harry James Potter",
                afirmacao: "Acertou"
            },
            {
                texto: "Harry Sirius Potter",
                afirmacao: "Errou"
            },
            {
                texto: "Harry Potter James",
                afirmacao: "Errou"
            },
            {
                texto: "Harry Dusley Potter",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Qual é o nome da escola de magia frequentada por Harry Potter?",
        alternativas: [
            {
                texto: "Durmstrang",
                afirmacao: "Errou"
            },
            {
                texto: "Beauxbatons",
                afirmacao: "Errou"
            },
            {
                texto: "Hogwarts",
                afirmacao: "Acertou"
            },
            {
                texto: "LLvermorny",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Qual é o nome do professor que ensina Poções no primeiro ano de Harry em Hogwarts?",
        alternativas: [
            {
                texto: "Remus Lupin",
                afirmacao: "Errou"
            },
            {
                texto: "Severus Snape",
                afirmacao: "Acertou"
            },
            {
                texto: "Gilderoy Lockhart",
                afirmacao: "Errou"
            },
            {
                texto: "Minerva McGonagall",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do feitiço usado para desarmar um oponente?",
        alternativas: [
            {
                texto: "Expelliarmus",
                afirmacao: "Acertou"
            },
            {
                texto: "Estupefaça",
                afirmacao: "Errou"
            },
            {
                texto: "Avada Kedavra",
                afirmacao: "Errou"
            },
            {
                texto: "Lumos",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do animal de estimação de Harry Potter",
        alternativas: [
            {
                texto: "Bichento",
                afirmacao: "Errou"
            },
            {
                texto: "Trevor",
                afirmacao: "Errou"
            },
            {
                texto: "Perebas",
                afirmacao: "Errou"
            },
            {
                texto: "Edwiges",
                afirmacao: "Acertou"
            }
        ]
    },
    {
        enunciado: "Qual é o nome do diretor de Hogwarts durante a maior parte dos filmes?",
        alternativas: [
            {
                texto: "Alvus Dumbledore",
                afirmacao: "Acertou"
            },
            {
                texto: "Severus Snape",
                afirmacao: "Errou"
            },
            {
                texto: "Minerva McGonagall",
                afirmacao: "Errou"
            },
            {
                texto: "Gellert Grindelwald",
                afirmacao: "Errou"
            }
        ]
    },    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    const totalPerguntas = perguntas.length;
    const totalAcertos = contagemAfirmacoes["Acertou"] || 0; // Se não houver acertos, considera como 0
    const porcentagemAcertos = (totalAcertos / totalPerguntas) * 100;

    caixaPerguntas.textContent = "Resultado do Quiz!";
    textoResultado.textContent = `Você acertou ${totalAcertos} de ${totalPerguntas} perguntas. Sua taxa de acerto foi ${porcentagemAcertos.toFixed(2)}%.`;
    caixaAlternativas.textContent = "";
}

