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


var continuar = "s"


//desafio 2

var opcao
function Solicitar() {
    opcao = prompt("Insira para: cadastrar(1) fazerlogin(2) excluir um cadastro(3) encerrar o programa(4)")
}

//desafio 1

var nomes = []
var senhas = []
var index = 0
function Guardar() {
    nomes[index] = prompt("Insira seu nome")
    senhas[index] = prompt("Insira sua senha")
    index++
}



//desafio 3



function Login(nome, senha) {
    for (var index2 = 0; index2 <= index; index2++) {
        if (nome == nomes[index2] && senha == senhas[index2]) {
            return true
        } else {
            return false
        }
    }
}

//desafio 4

var nome2
var suporteNome = []
var suporteSenha = []
var indexSup = 0

function ExclusãoDeCadastro(nome) {

    for (var index3 = 0; index3 <= index; index3++) {

        if (nome == nomes[index3]) {

            nomes[index3] = 0
            senhas[index3] = 0

        }
    }

    for (var index4 = 0; index4 <= index; index4++) {

        if (nomes[index4] != 0 && senhas[index4] != 0) {

            suporteNome[indexSup] = nomes[index4]
            suporteSenha[indexSup] = senhas[index4]

            indexSup++

        }
    }
    nomes = suporteNome
    senhas = suporteSenha
}



//desafio 5

while (continuar == "s") {
    Solicitar()


    if (opcao == 1) {
         Guardar()
    } else if (opcao == 2) {
        var nome = prompt("Insira um nome para login")
        var senha = prompt("Insira uma senha para login")
        var login = Login(nome, senha)
        if(login == true){
            console.log("Login feito com sucesso")
        }else{
            console.log("Nome ou senha incorreto")
        }
    } else if (opcao == 3) {
        var nome = prompt("Insira um nome para excluir o cadastro")
         ExclusãoDeCadastro(nome)
    } else if (opcao == 4) {
        continuar = "n"
    }

    if(continuar == "s"){
        continuar = prompt("Deseja continuar s ou n")
    }
}