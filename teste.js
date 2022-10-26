/*
1 Faça uma função que recebe um valor inteiro e verifica se o
valor é positivo, negativo ou zero. A função deve retornar 1
para valores positivos, -1 para valores negativos e 0 para o
valor 0.


Desafio:
1. Crie uma função que solicite dois valores ao usuário, um nome e uma senha e
guarde cada um no seu respectivo array.

2. Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
opção escolhida pelo usuário.

3. Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
senha, depois procure o nome recebido no array de nomes e em caso positivo
compare a senha no array de senhas. Se as duas comparações forem válidas
retorne true se uma delas não for válida retorne false.

4. Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
então procure pelo nome no array de nomes e exclua ele e a senha correspondente
do outro varray, por fim organize o array para eliminar os espaços vazios.

5. Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere
que o usuário pode escolher quando encerrar o programa conforme as opções e
que no login caso seja bem sucedido retorna uma mensagem “Login feito com
sucesso!” e em caso negativo “Nome ou senha incorretos!”
*/

// exercicio 1
var numero
function Valor() {
    numero = prompt("Insira um número inteiro")
    if (numero > 0) {
        console.log(1)
    } else if (numero < 0) {
        console.log(-1)
    } else if (numero == 0) {
        console.log(0)
    }
}
Valor()

//desafio 1
var nome = []
var senha = []

function Guardar(){
    nome = prompt("Insira seu nome")
    senha = prompt("Insira sua senha")
}
Guardar()

//desafio 2
var opcao
function Solicitar(){
    opcao = prompt("Insira para: cadastrar(1) fazerlogin(2) excluir um cadastro(3) encerrar o programa(4)")
}


