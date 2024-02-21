// Pegar os dados do formulario
const data = []

const fname = document.getElementById("fname");

//Para "ouvir" o click do botão, usamos o addEventeListener
const btnSubmit = document.getElementById("btn");

const endereco = document.getElementById("endereco");

const email = document.getElementById("email");

const telefone = document.getElementById("telefone");

btnSubmit.addEventListener('click', function(event){
    //Não deixa o formulario se comportar como pardrao, ou seja,
    //enviar os dados para proxima pagina/requisição
    event.preventDefault();
    console.log(fname.value);
    console.log(endereco.value);
    console.log(email.value);
    console.log(telefone.value);
    console.log(btn.value);

//Criando objeto

const pessoas = {
    nome: fname.value,
    endereco: endereco.value,
    email: email.value,
    telefone: telefone.value,

    favoritos :[
        {
            titulo: "One piece",
            Autor: "Oda",
            Ano: "1998",
            Gênero: "Aventura,Pirata"
        }
    ]
}
//adicioandar a pessoa a lista
data.push(pessoas);
console.log(pessoas)
});
