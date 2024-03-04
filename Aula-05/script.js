//Trabalhando com data e hora
//Algumas funções matemáticas
//Funções e escopo de variáveis
//Revisa objetos

const horario = document.getElementById("horario");
const semana = document.getElementById("semana");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");
const dataFormat = document.getElementById("data-format");
const random = document.getElementById("random");
let dataHora = new Date();
//DIA.MES.ANO

horario.innerText = dataHora;//DATA COMPLETA

semana.innerText = dataHora.getDay() +2 +" Segunda-feira";

dia.innerText= dataHora.getDate() + 1 + " Dia";

//o mes começa a contar em 0; 0 a 12...
mes.innerText= dataHora.getMonth() + 1 + " Março";

ano.innerText= dataHora.getFullYear() + " Ano";

dataFormat.innerText = mesAno.getMonth();

let diaSemana;
let mesAno;

switch (dataHora.getMonth) {
    case 1:
        diaSemana = "Domingo";
        break;
    case 2:
        diaSemana = "Segunda-Feira";
        break;

    case 3:
        diaSemana = "Terça-Feira";
        break;

    case 4:
        diaSemana = "Quarta-Feira";
        break;

    case 5:
        diaSemana = "Quinta-Feira";
        break;

    case 6:
        diaSemana = "Sexta-Feira";
        break;

    case 7:
        diaSemana = "Sabado";
        break;
    default:
        diaSemana ="Erro";
        break;
};

let meses = ["Janeiro","Feveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

dataFormat.innerText = diaSemana + ", " + dataHora.getDate()
+ " de " + meses(dataHora.getMonth());
+ " de " + dataHora.getFullYear() + "."


Math.floor()//Arredonda pra baixo
Math.random()//retorna um num aletorio entre 0 e 1
Math.round()//arredonda 0 num

//Gerar numberos aleatorios de 0 a 100

let number = Math.round((Math.random() * 100) + 1);

random.textContent = number;