/**
 * 
 *  # Adicionando dois numeros com Javascript
 * 
 *  Number é um tipo de dado em Js que representa um dado numérico.
 * 
 *      EX : const variableSum = 10 + 10; # 20
 * 
 *  # Subtrair um número de outro com Javascript
 * 
 *  Javascript usa o simbolo ( - ) para subtrair.
 * 
 *      EX : const variableSub = 10 - 2 ; # 8
 * 
 *  #  Multiplicar dois números com Javascript
 * 
 *  Javascript usa o símbolo (*) para multiplicação de dois números.
 * 
 *      EX : const variableMulti = 13 * 2 ; #26
 * 
 *  # Dividir um número por outro com Javscript
 * 
 *  O Javascript pode dividir um número pelo outro usando o símbolo (/) .
 * 
 *      EX : const variableDiv = 16 / 2
 * 
 */

let primeiroValor = 12 ;
let segundoValor = 3 ;

let somarValores = primeiroValor + segundoValor; //Somar
let subtrairValores = primeiroValor - segundoValor; //Subtrair 
let multiplicarValores = primeiroValor * segundoValor; //Multiplicar
let dividirValores = primeiroValor / segundoValor; // Dividir

// Mostraindo valores das operações no console do navegador !!
console.log(somarValores);
console.log(subtrairValores);
console.log(multiplicarValores);
console.log(dividirValores);


/**
 *  # Incrementando um Número com Javscript
 * 
 * Você pode facilmente incrementar ou adicionar 1 à variável com o operador `++` 
 * 
 *      EX : 
 *          let count ;
 *          count++;
 * 
 * # Decrementar um Número com Javscript
 * 
 * Você pode facilmente decrementar ou subtrair 1 à variável com o operador `--` 
 * 
 *      EX : 
 *          let count ;
 *          count--;
 */

let adicionandoValor = primeiroValor++; // primeiroValor = primeiroValor + 1
let subtraindoValor = primeiroValor--; // primeiroValor = primeiroValor - 1

console.warn(adicionandoValor)
console.warn(subtraindoValor)

/**
 *  # Descobrir o resto em Javascript
 * 
 *   O operador de resto `%` retorna o resto da divisão de dois números
 * 
 *   EXEMPLO :
 * 
 *    5 % 2 = 1 
 *    5 / 2 = 2 // resta 1
 * 
 */