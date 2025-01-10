//Declarando Variáveis

let loja = document.getElementById("loja");
let lojaC = document.getElementById("lojaC");

let endereço = document.getElementById("endereço");
let endereçoC = document.getElementById("endereçoC");

let contatos = document.getElementById("contatos");
let contatosC = document.getElementById("contatosC");

let left = document.getElementById("left");
let right = document.getElementById("right");

let item = document.getElementById("item");
let itemName = document.getElementById("itemName");
let pontos = document.getElementById("ponto");
let i = 0;

let itens = ['celular', 'carregador','fone'];




//functions 
const displayChange = (changer) => {
    
    changer.style.display = changer.style.display === 'flex'? 'none' : 'flex';
    
};

const putItem = () => {
    
    item.src = `${itens[i]}.jpg`;
    itemName.innerHTML = itens[i];
    
addPonto();
    
};

const addPonto = () => {
    
    pontos.innerHTML = ' ';
    for (let pos in itens) {
        
        if (pos === i){
            pontos.innerHTML +='+';
        } else {
        pontos.innerHTML += '.';
        }
    };
    
};



putItem();




const changeItem = (symbol) => {
    
    switch (symbol) {
        
       case '-':
        if (i === 0) {
            
            i = itens.length - 1;
        } else {
            
            i--;
        };
        break;
        
        case '+':
        
        if (i === itens.length -1){
            
            i = 0;
        } else {
            
            i++;
        };
        break;
        
    }
    
    putItem();
    addPonto();
    
    
}
//events

loja.addEventListener('click', function() {
    displayChange(lojaC);
});

endereço.addEventListener('click', function() {
    displayChange(endereçoC);
});

contatos.addEventListener('click', function() {
    displayChange(contatosC);
});

left.addEventListener('click', function() { 
    changeItem('-');
});

right.addEventListener('click', function(){
    
    changeItem('+');
});

