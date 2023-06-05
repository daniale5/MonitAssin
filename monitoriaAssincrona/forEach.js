console.log("----- Tabuada de 2 -----");

let numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item){
    console.log(item * 2);
}

numeros.forEach(tabuadaDe2);

console.log("----- Salário -----");

let salarios = [ 1600, 1700, 1400, 1800, 2000];

function calcAdd(sal){
    let add = 3/100; // 3%
    let salario = sal * add;
    console.log(sal + salario);
}

numeros.forEach(calcAdd);

console.log("----- Pegando índices -----");

let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(val, indice) {
    total += val; 
    console.log("Posição: " + indice + " - Soma = " + total); 
}

numeros.forEach(somar);

console.log("----- Usando forEach com função anônima -----");

let modelPhones = ["A31","MotoOne","A51","A72","Redmi"]; 

modelPhones.forEach(function(mod, indi){ 
   console.log(indi+" = "+ mod); 
}); 
