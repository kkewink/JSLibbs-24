const main = document.getElementById("principal");

const numbers = [1,2,3,4,5,,6,7,8,9,10];

const myItem = {
    color: 'orange',
    text: 'Primario Item'
};

const myItems = [
    {
        color: 'yellow',
        text: 'Primeiro item'
    },
    {
        color: 'blue',
        text: 'Segundo Item'
    },
    {
        color: 'red',
        text: 'Terceiro Item'
    }
]


myItems.forEach(item => {
    const meuH1 = document.createElement('h1');

    meuH1.innerText = item.text;

    meuH1.style.color = item.color;

    main.appendChild(meuH1);
});

