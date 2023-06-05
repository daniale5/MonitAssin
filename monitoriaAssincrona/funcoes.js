let largura = window.prompt("Digite a largura 1: ");
let lar = window.prompt("Digite a largura 2: ");
        
function calcArea(larg=6, comp=25){
    let area = larg * comp;
    return "Área: "+ area;
}
console.log(calcArea(10,30));
console.log(calcArea()); // Não passei valor, então pega os valores padrões
console.log(calcArea(largura,30));
console.log(calcArea(5,20));

console.log("----------");

function calcularA(largur=null, comprim=null){
    let ar;
    if(largur != null && largur != 0 && comprim != null && comprim != 0){
        ar = largur * comprim;
    }else{
        alert("Parâmetros vazios!");
    }
    return "Área: "+ ar;
}
console.log(calcularA(lar,30));
console.log(calcularA());
console.log(calcularA(0,30));

console.log("----- REST PARAMATERS -----")

function FuncaoVariosParam(param1,...maisParams){
    console.log(param1);
    maisParams.push(param1);
    for(const value of maisParams){
        console.log(value)
    }
}

FuncaoVariosParam(10,3,5,6,89,2,4,23);

console.log("----- Função Anônima -----")

const soma = function(x,y){ 
    return x + y; 
} 
const mostrarResult = function(a,b,operacao = soma){ 
    console.log(operacao(a,b));
}
mostrarResult(15,35);

console.log("----- Funções de Seta -----")

let media = (n1,n2,n3,n4) => {
    return `Média: ${(n1+n2+n3+n4)/4}`;
}
console.log(media(9,8,7,9));

let not1 = window.prompt("Digite a n1: ");
let not2 = window.prompt("Digite a n2: ");

let med = (not1,not2) => {
    return `Média: ${(not1 + not2)/2}`;
}
console.log(med(not1,not2));