// DECLARAÇÕES E VARIAVEIS
//VAR, LET E CONST
//o var pode ser alterado na mesma variavel, o let e const nao


let nome="Fiap";
console.log(nome);
let nome2="Dev"
console.log(nome2);

if(true){
    var avatar="Fiapinho"; //se fosse let, nao deixaria acessar os dados da variável fora, daria erro
}

console.log(avatar);

let exemplo1="Olá Dev-let";
console.log(exemplo1);

const exemplo2="Olá Dev-const";
console.log(exemplo2);

let exemplo3=20;
console.log(typeof exemplo3); //typeof mostra qual é o tipo da variável

let exemplo4=true;
console.log(typeof exemplo4);

let exemplo5={nome:"fiap"}; //a chave indica objeto, parênteses indifca método/função e colchetes indica array(lista)
console.log(exemplo5);

let exemplo6=["PHP","JAVA","HTML"];
console.log(exemplo6);

//valor undefined
let exemplo7;
console.log(exemplo7);

//valor nulo
let exemplo8=null;
console.log(exemplo8)

//OPERADORES ARITIMÉTICOS
const valor1=10;
const valor2=20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 / valor2);
console.log(valor1 * valor2);

//OPERADORES LÓGICOS
const valor3=30;
const valor4=40;

console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 < 0);//   && = and
console.log(valor3 == valor4 || valor4 > 10); //   ||(pipe) = or

//OPERADORES DE COMPARAÇÃO

console.log(valor3 == valor4); //comparação
console.log(valor3 === valor4); //compara e verifica o tipo da variável

//em da cp
const precoinicial = 12;
const valordesconto = 2;
const precofinal = precoinicial -valordesconto;
console.log("O valor com desconto é de:",precofinal,"reais");

//estrutura condicional

//if
if(true){
    console.log("verdadeiro");
}

let nome1="fiap";

if(nome1 =="fiap"){
    console.log("nome Correto")
}

//if/else
if(nome1 =="fiap"){
    console.log("nome Correto")
}else{
    console.log("nome Errado")
}

//if,if else, else encadeado/aninhado

let idade =13;

if(idade <= 13){
    console.log("uma criança")
}else if(idade >13 && idade <18){
    console.log("um adolescente")
}else{
    console.log("um adulto")
}

//swicth case

let times ="corinthians"

switch(times){
    case "corinthinas":
        console.log("Um time de tradição")
        break;
    case "sao paulo":
        console.log("sem tradição")
        break;
    case "palmeiras":
        console.log("sem mundial")
        break;
    default:
        console.log("nenhumas das opções(santos")
}

// condicional ternaria

// ?=if    :=else
let numero =100;
let resultado = numero ==100 ? "Certo":"Errado";
console.log(resultado);

let usuario="fiap";
let usuariologado= usuario=="fiap" ? "logado com sucesso":"usuario inválido";
console.log(usuariologado);
