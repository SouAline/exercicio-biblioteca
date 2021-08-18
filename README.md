# exercicio-biblioteca
===================================
Biblioteca Ágil
Você foi contratado para desenvolver um sistema de biblioteca no seu bairro. 
Por enquanto, vocês possuem apenas 3 livros:
Como fazer sentido e bater o martelo - Autor: Alexandro Aolchique - Ano: 2017
Código Limpo - Autor: Tio Bob - Ano: 2001
Basquete 101 - Autor: Hortência Marcari - Ano: 2010

Sempre que o sistema for inicializado, estes livros devem, obrigatoriamente, estarem cadastrados e disponíveis para retirada no sistema.
Seus vizinhos gostariam de retirar, devolver e doar novos livros. Para isso, você deverá desenvolver as seguintes funcionalidades, que devem ser apresentadas para o usuário através de um menu:
- Retirar um livro: Dado a lista de livros que estão cadastrados no sistema, o usuário pode retirar qualquer livro desde que não esteja emprestado (ou seja, esteja disponível), e em caso de sucesso, ele fica indisponível.
- Devolver um livro: Dado a lista de livros que o usuário retirou, ele pode devolver e em caso de sucesso, o livro se torna disponível novamente.
- Doar um livro: O usuário entra com as informações (Título, Autor, Ano) e o livro deve aparecer como disponível para retirada.
Não esqueça de registrar o nome de qual vizinho está com o livro.

EXEMPLOS:
====================================
Funcionalidade - Retirar um livro 
Livro selecionado: 
Número: 00002
Título: Código Limpo 
Autor: Tio Bob 
Ano: 2001
Status: Disponível
Emprestado para: 
Após a retirada:
Número: 00001
Título: Código Limpo 
Autor: Tio Bob 
Ano: 2001
Status: Indisponível
Emprestado para: Maria Antônia

==================================
Funcionalidade - Devolver um livro
Selecionar livro emprestado: 
Número: 00003
Título: Basquete 101
Autor: Hortência Marcari
Ano: 2010
Status: Indisponível
Emprestado para: João Pedro
Após a devolução:
Número: 00003
Título: Basquete 101
Autor: Hortência Marcari
Ano: 2010
Status: Disponível
Emprestado para: 

Funcionalidade - Doar um livro (Cadastrar)
==================================
Campos para preenchimento de um novo livro:
Número: 
Título: 
Autor: 
Ano: 
Status:
Emprestado para:

Após o cadastro:
Número: 00004
Título: Novo livro
Autor: Inês
Ano: 2000
Status: Disponível
Emprestado para: 

- Extra: Seria muito legal se você conseguisse implementar uma maneira de armazenar as informações dos livros de forma que elas continuassem existindo mesmo após o usuário sair do sistema. Que funcionasse como um espécie de “banco de dados”. ;)
