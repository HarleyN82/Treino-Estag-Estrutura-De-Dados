# SUMMARY ON THE QUEUE #
### Gerenciamento de dados ou transferência de tarefas. Este segue o método *FIFO*, ou seja, First In, First Out. O primeiro que entra é o primeiro que sai. ###

Esse controle quer dizer que os dados contidos nela são podem entrar apenas por uma ponta e deverão sair pela outra. Com isso, garante-se que o primeiro dado que entrou será o primeiro a sair da fila.

![image](https://th.bing.com/th/id/R.2638ff1b56990684c22f195589fff9bd?rik=4AEMvtcb14bHDA&pid=ImgRaw&r=0)

## Casos de Uso - Queue ##

- Fila de banco (como mostrado na imagem);
- Enfileiramente de livros;
- Sistema da bolsa de valores: A primeira pessoa que recebeu um pedido é a primeira que vai receber a ação;
- Promoções limitadas da Amazon - as 10 primeiras pessoas que recebem os produtos);
- Sistema que administra diversos computadores ligados a uma única impressora.

## Estrutura de Queue ##

É preciso ter um Enqueue - porta de entrada - e o mesmo valor saindo por uma outra porta - Dequeue.

## Métodos da Queue ##

- Push() - Método para adicionar os itens na pilha.
- Shift() - Método para remover, automaticamente, o primeiro item da pilha.
- DisplayAll() - Método para exibir todos os itens da pilha.

## Exemplos de Projetos com Queue ##

- 
- 
- 
- 

## Métodos com Queue ## 

Utilizaremos os dois métodos seguintes:

- push(): que permite sempre adicionar um elemento no final do quadro.
- shift(): que retira o primeiro elemento do quadro, reduzindo, assim, seu tamanho ao defasar os outros elementos para a esquerda.

## Análise Gráfica de Queue ##

![image](https://th.bing.com/th/id/R.224e00eb1b9f6d946aeb3bfd2d10499d?rik=%2fk2scWV531EvJw&pid=ImgRaw&r=0)

## Referências ##
- Playlist: EstruturaDeDadosJS - https://www.youtube.com/watch?v=QHxCdtSyK2s&list=PLE1UtdMhwaEonmSRDkSzpFV5m5zKiqM94&index=6
- Playlist2: EvertonBraga/EstruturaDeDadosJs - https://www.youtube.com/watch?v=ine48rveT2U&list=PLpfKv2Mn_c-HTFozSx8iplzzBlQJnPs2j&index=20
- MundoJS: EstruturaDeDadosFila- https://www.mundojs.com.br/2018/02/05/pilhas-e-filas #:~:text=A%20fila%20%C3%A9%20uma%20estrutura%20de%20dados%20muito,administra%20diversos%20computadores%20ligados%20a%20uma%20%C3%BAnica%20impressora.
- MundoJS: Fila - https://www.mundojs.com.br/2019/11/01/estrutura-de-dados-com-javascript-fila/#:~:text=Estrutura%20de%20Dados%20com%20JavaScript%3A%20Fila%20Filas%20s%C3%A3o,primeiro%20a%20entrar%20%C3%A9%20o%20primeiro%20a%20sair.
- CCM -https://br.ccm.net/faq/9889-as-pilhas-e-as-filas-em-javascript
- Faustino.dev - https://faustino.dev/linear-queue-js/