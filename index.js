//-------------------exemplo basico de arrow function------------------

// const sum = (number1, number2) => {
//     return(number1 + number2)
// }

// console.log(sum(1,6));

//------------------exemplo sem return---------------------------------

// const sum = (number1, number2) => number1 + number2;

// console.log(sum(30,20))

//------------------- Sem parametros -----------------------------------
//Quando não tem paramêtro, deixar os parenteses vazios

// const name = () => {
//     return "It Lean"
// }

// console.log(name())

//----------------------Só um parametrô-------------------------------

// const double = (number) => number * 2;
// console.log(double(5))


//OU

// const double = number => number *2;
// console.log(double(4))

//--------------------------Dois ou mais parâmetros-------------------

// const sum = (number1, number2, number3) => number1 + number2 + number3;

// console.log(sum(30,20,10))

//usar o return quando se usa uma logica. Exemplo:

// const idade = (year) => {
//     if(year >= 18) {
//         return "Maior Idade"
//     }else {
//         return "Menor idade"
//     }
// }

// console.log(idade(18))

//-----------------Retornando um JSON sem a palavra return------------

// const Person = () => ({nome: "Viviane", eye: "Castanho"});

// console.log(Person())

//---------------Criar uma IIFE com arrow function---------------------
//Estrutura da IIFE envolve a função com parenteses e após o fechamento deve-se colocar um ().
//util para proteger alguns erros do codigo, como variaveis com o mesmo nome.

// (() => {
//     const getPerson = () => ({name: "Vivi", age: "15"});

//     console.log(getPerson());
// })()

//---------------------O this é muito simples-------------------------

(() => {
    function Person () {
        this.year = 0;

        setInterval(() => {
            this.year = this.year + 1;
            console.log("Qual é ",this);
            console.log(this.year)
        }, 1000);
    }
    const p1 = new Person()
})();
