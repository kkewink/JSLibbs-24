// /*alert("text");*/
// const nome = document.querySelector("#nome");
// const button = document.querySelector("button");

// /* Eventos de JavaScript */
// button.addEventListener("click", function(event) {
//     event.proventDefault();
//     const inputValue = nome.value;
//     console.log(nome.value);
// })

const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

//Array
const allPs = document.querySelectorAll("p");

//Como eu acesso um Array?
//Pelo for, é INDEX!!
//forEach

allPs.forEach(item => console.log(item.innerHTML))


/* Eventos de JavaScript */
button.addEventListener("click", function(event) {
    event.preventDefault();
    const inputValue = nome.value;
    const templateHtml = `<li>${inputValue}</li> `;

    /*incluindo intens no HTML*/ 
    
    lista.innerHTML += templateHtml;
    nome.value = ("");
})