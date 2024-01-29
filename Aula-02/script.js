

// [  ] -- universal para uma lista
// lista interamos com FOR

//nomes = ["Samuel", 17, {endereco:"Bairro Santa Maria"},];
/*
var nomes = new Array (); 

//Coloquei um elemento no inicio
nomes[0] = "Ernesto";
//Adiciona mais elementos!
nomes.push(1977)
nomes.push(1978)
nomes.push(1979)
nomes.push(1970)

var nomesAll = ["Gustavo","Renato","Pedro","Ernesto","Laura","Alessandro"];

//document.write(nomes[1970]);

//Organiza caracteres de forma crescente
nomesAll.sort();

document.write(nomesAll);

for (let index = 0; index < nomesAll.length; index++) {
    const element = nomesAll[index];
    

    console.log(element);
}

nomesAll.forEach(nome => {
    console.log(nome);
});

//const titulo = document.getElementById("titulo");
//const container = document.getElementById("container");
//const cor = document.getElementsByClassName("cor");

titulo.innerText = "Receba"

container.innerHTML = "<h3>Deu certo!! </h3>"


console.log(titulo);
*/
const container = document.getElementById("container");

//simular dados de um servidor
//essa forma não será a forma final - apenas didática

var array = [1,2,3,4,5];

var myCard =`
<div class="card">
            <img src="imagens/um-tenis-preto-isolado-no-branco.jpg" alt="">
            <div class="texto">
                <h3>tenis basico</h3>
            <p>Tênis Bouncer com solado chunky!</p>
            <h4>R$40,00</h4>

            </div>
            <button>comprar</button>
        </div>
        `;


for (let index = 0; index < array.length; index++) {
    container.innerHTML = myCard + myCard + myCard + myCard;

}