const fs = require("fs")
const livros = require('./livros')
const readline = require("readline")
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

const livro = {
   titulo: "",
   autor: "",
   ano: ""
}
   let opcaoSelecionada = {
      primeiraOpcao: ""
   }
   

//ordem do arquivo livros.js ---> nome do livro, autor, ano

function imprimir(livro, i) {
   console.log(defineIndice(i))
   const titulo = livro[0]
   const autor = livro[1]
   const ano = livro[2]
   const status = 
   console.log(`O titulo do livro é ${titulo}`)
   console.log(`O autor do livro é ${autor}`)
   console.log(`O ano do livro é ${ano}`)
   console.log("\n")
}


function defineIndice(indice) {
   return "000" + indice
}

function menu(palavra) {
   console.log("Selecione sua opção")
   console.log("\n1 - Retirada de livros", "\n2 - Doação de livros", "\n3 - Devolução de livros\n")

   rl.question("O que você deseja fazer?", function (opcao) {
     opcaoSelecionada.primeiraOpcao = opcao.trim()
      console.log(opcaoSelecionada)
      switch (opcao.trim()) {
         case "1":
            retiralivro()
            break;
         case "2":
            cadastroLivro()
            break;
         case "3":
            devolveLivro()
            break;
         case "4":
            disponibilidadeDoLivro()
            break;
         default:
            console.log("A opção selecionada não existe")
            rl.close()
            break;
      }
   })
}

function cadastroLivro() {
   rl.question("Titulo: ", function (titulo) {
      rl.question("Autor: ", function (autor) {
         rl.question("Ano: ", function (ano) {
            livro.titulo = titulo.trim()
            livro.autor = autor.trim()
            livro.ano = ano.trim()

            console.log(livro)
            rl.close()
         })
      })
   })
}

function disponibilidadeDoLivro(retirada) {
// if (opcaoSelecionada){
//    return "Indisponível"
// }
}
console.log(disponibilidadeDoLivro())

function devolveLivro() {
}


//FOR --> variavel "i" é um contador, dentro dela esta sendo aramazenado o indice (sendo inicializado com zero), apos ela verificar que o arquivo livro é menor que o "i" ele incrementa o "i" e mais um.
function main() {
   let livrosBusca = ""
   for (var i = 0; i < livros.length; i++) {
      livrosBusca = livros[i].split('-')
      imprimir(livrosBusca, i)
   }
   menu()
}

main()