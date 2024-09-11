/**
 * Aspas não são os únicos caracteres que podem ser escapados dentro de uma string. As sequências de escape permitem que você use caracteres que você não poderia usar em uma string em outras situações.
 * 
 *  |     Código     |      Saída      |
 *  |      \'        |   aspas simples |
 *  |      \"        |   aspas duplas  |
 *  |      \\        |   barras invertidas |
 *  |      \n        |   nova linha  | 
 *  |      \t        |   tab   |
 *  |      \r        |   retorno   |
 *  |      \b        |   retroceder   |
 *  |      \f        |   quebra de página   |
 */

var myStr = "FirstLine\n\tSecondLine\n\\ThirdLine";

console.log(myStr);