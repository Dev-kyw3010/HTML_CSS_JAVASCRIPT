
// Dado é qualquer coisa que tenha significado para o computador.

// O Javascript fornece oito tipos de dados diferentes que são :
/**
 * 1. Undefined ;
 * 2. null ;
 * 3. boolean ;
 * 4. string ;
 * 5. symbol ;
 * 6. bigint ;
 * 7. number ;
 * 8. object ;
 * 
 * Por exemplo , o computador distingue numeros como 12 , e strings , como "12" , "dog" ou até "123 cats", as quais são coleções de caracteres . Computadores podem realizar operações matemáticas em um número, mas não em uma string. 
 */

// O que são variáveis ?

// São comos caixas vazias que permitem armazenar e manipular dados de forma dinâmica. Elas fazem isso usando uma "etiqueta" para apontar para o dado ao invés de usar o próprio dado. 

// Qualquer um dos 8 tipos de dados pode ser armazenado em uma variável.

/**
 *  Exemplo : var ourName ;
 */

/**
 * ---------- Entendendo Variáveis não Inicializadas-----------
 * 
 * > Quando as variáveis de Javascript são declaradas , elas têm um valor inicial de undefined . Se você fizer uma operação matemática em uma variável undefined , seu resultado será NaN , o que significa " Não é um número " .
 * 
 * > Se você concatenar uma string com uma variável undefined , você receberá uma string com o valor undefined.
 * 
 * > Em javascript todos os nomes de variáveis e funções são sensíveis a caracteres maiúsculos e minúsculos . Isso significa que a capitalização importa.
 * 
 * > MELHORES PRATICAS : Escreva nomes de variáveis em JS em camelCase.Em  camelCase, nomes de variáveis com mais de uma palavra possuem a primeira palavra toda em minúscula e a primeira letra de cada palavra subsequente capitalizada.
 * 
 * EXEMPLO : 
 * 
 *  var someVariable;
 *  var anotherVariableName;
 *  var thisVariableNameIsSoLong;
 * 
 * 
 *  ## Diferença entre as palavras-chave : var x let
 * 
 *  var = variavel padrão ; pode ser ( sobrescrevida )
 * 
 * let = Introduzida no ES6 ( Regras de melhores práticas ) ; resolve o problema da palavra-chave : var.
 * 
 *  ## Declarar variaveis somente de leitura com a palavra-chave : const
 * 
 *   const possui todos os recursos maravilhosos que let tem , com o bônus adicional que variáveis declaradas usando-a são somente de leitura, ou seja , seu valor não pode ser modificado.
 * 
 * MELHORES PRATICAS : Sempre deve nomear variáveis que você não quer reatribuir , usando a palavra-chave : const . Isso ajuda quando você acidentalmente tenta reatribuir uma variável que deveria ser constante.
 * 
 * MELHORES PRATICAS : Sempre deixe o identificador do const capitalizado [ CAPS LOCK].
 * 
 * 
 */

let firstName, lastName;

const LEVEL = "junior";
firstName = "Eduardo";
lastName = "Kim";

console.log(firstName +" " + lastName);
console.log("Nivel de XP : "+ LEVEL);