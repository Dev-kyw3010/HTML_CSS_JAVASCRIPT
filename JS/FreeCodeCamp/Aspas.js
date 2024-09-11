
// Adicionando textos com aspas duplas
console.log("Alan said, \"Peter is learning JavaScript\".")
console.log("Animes são \"legais para quem gosta\".")

/**
 * Valores de string em JavaScript podem ser escritas com aspas simples ou duplas, desde que você comece e termine com o mesmo tipo de aspas. Diferente de outras linguagens de programação, aspas simples e duplas funcionam da mesma forma em JavaScript.
 */

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

/**
 * O motivo pelo qual você pode querer usar um tipo de aspas no lugar da outra é se você vir a querer usar ambas em uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e ter a conversa entre aspas. Outro uso para isso seria salvar uma tag <a> com vários atributos em aspas, tudo dentro de uma string.
 */

const conversation = 'Finn exclaims to Jake, "Algebraic!" ';

/**
 * Porém, isso se torna um problema se você precisar usar as aspas mais extremas dentro dela. Lembre-se, uma string tem o mesmo tipo de aspas no início e no final. Mas se você tem aquela mesma aspa em algum lugar no meio, a string vai terminar mais cedo e lançará um erro.
 */

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';

//const badStr = 'Finn responds, "Let's go!"';

const link = '<a href="https://google.com" target="_blank"> Google </a>';

