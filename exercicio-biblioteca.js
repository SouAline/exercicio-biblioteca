const fs = require("fs")
const livros = require('./livros')
//console.log(leituraLivros) 

//ordem do arquivo livros.js ---> nome do livro, autor, ano

function imprimir(livro){
    const titulo = livro[0]
    const autor = livro[1]
    const ano = livro[2]
    console.log(`O titulo do livro é ${titulo}`)
    console.log(`O autor do livro é ${autor}`)
    console.log(`O ano do livro é ${ano}`)
    console.log("\n")
}


function recebeIndice(){
   
}


function cadastroLivro(){

} 

function retiralivro(){

}


function devolveLivro(){

}


//FOR --> variavel "i" é um contador, dentro dela esta sendo aramazenado o indice (sendo inicializado com zero), apos ela verificar que o arquivo livro é menor que o "i" ele incrementa o "i" e mais um.
function main(livrosBusca){ // criando um array de cada livro
    for (var i=0; i<livros.length; i++){ 
       livrosBusca = livros[i].split('-')
       imprimir(livrosBusca)
    } 
    for (var i=0; i<livros.length; i+1){ 
        livrosBusca = livros[i].split("\n")
       
    } console.log(livrosBusca) 

   // console.log(`Livros disponiveis: ${livrosBusca}`)
}   
main()