let cliente = ["Daniele",30,1.60];
  // indices   0  -  1  - 2 

console.log(cliente[0]); //Daniele

cliente[3] = "Nicole";

console.log(cliente);
console.log(cliente[3]);

console.log("Concatenação de variáveis/Conteúdo");
console.log(`Tamanho do vetor:${cliente.length}`); //template string js
console.log("Tamanho do vetor:"+cliente.length); //forma padrão

cliente.push("Feminino");
console.log(cliente[4]);
console.log(cliente);
console.log(`Size Upgrade: ${cliente.length}`);

cliente.push({id:4}); //add um objeto no array
console.log(cliente);
console.log("ID do cliente:"+cliente[5].id); //4

cliente.pop();  // Podemos excluir o último elemento de um array com o pop()
console.log(cliente);

// console.log(cliente[5].id);  erro forçado

delete cliente[2]; //deleta até o indice
console.log(cliente);