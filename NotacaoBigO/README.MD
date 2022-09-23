# SUMMARY ON THE O BIG NOTATION #

## É um modo de classificar o algoritmo pelo seu tempo de execução ou espaço ocupado conforme o nosso input aumenta. ##

Avalia o comportamento limite de uma função em relação aos valores dos argumentos utilizados. Ou seja, analisa o desempenho, a partir da entrada de dados.

**Eficiência:** Fazer o melhor, com o máximo das coisas, com menos recursos possíveis.

Verifica a escalabilidade de um código quando os parâmetros possuem um valor específico ou infinito e a complexidade do código, para que assim possamos torná-lo mais eficiente.

Por exemplo, podemos cortar o cabelo de suas formar ou juntar e cortar de um vez, que é mais fácil e rápido, ou fio por fio, que é mais demorado e tem um alto nível de complexidade. O resultado é o mesmo, mas os processos é que fazem a diferença.

## CENÁRIOS COMPUTACIONAIS ##

Para fazer um código que precisa do preenchimento de uma lista de nomes, ele vai usar o input e tem como parâmetro um array para armazenar, por exemplo, 5 nomes. Ou seja, a complexidade, a lógica por trás, da estrutura de dados é O(n). É algo simples. 

Mas, supondo que eu precise fazer uma permutação de dados, para saber a possibilidade de posições que 5 pessoas podem ter em uma fila. A complexidade seria O(n!), já aumentou em relação ao anterior.

## COMPLEXIDADE DE ESPAÇO E TEMPO ##

É o tempo gasto pelo algoritmo para ser executado em função do espaço da entrada.

Podemos definir tempo O como:

![image](https://user-images.githubusercontent.com/113690864/191983738-6c10b9a4-1b39-422a-b4f9-bf51d3bb916e.png) ![image](https://user-images.githubusercontent.com/113690864/191983804-c5a9d845-8457-4f87-a63e-06d8c74e5b07.png)

- Constante: O(1) - Menos complexo;  
- Tempo linear: O(n);

N - especifica o número de itens dentro do array, então quanto mais itens mais tempo.


![image](https://user-images.githubusercontent.com/113690864/191983890-065f2264-dbc6-42ae-8137-c1b4c46f9606.png) ![image](https://user-images.githubusercontent.com/113690864/191983952-50e3e533-4c02-4248-bc2b-e223031bba28.png)

- Tempo Logarítmico: O(n log n);
Quanto menor a complexidade, mais eficiente é.


![image](https://user-images.githubusercontent.com/113690864/191984017-cc3aa0fc-caa6-48fb-8888-d7562ce395cd.png)

- Tempo quadrático: O(n^2);

![image](https://user-images.githubusercontent.com/113690864/191984100-3fc7da15-c391-4e59-b32c-a81fced443ce.png)

-Tempo exponencial: O(2^n);


- Tempo fatorial: O(n!);
- Tempo polinomial: 2^{O(log n)};


## GRÁFICO COMPLEXIDADE DE ESPAÇO E TEMPO ##

![image](https://user-images.githubusercontent.com/113690864/191984230-07d16488-a6ad-4882-86ba-809caa0a7439.png)

É importante ter um gráfico de apoio para segmentar e contribuir com uma melhor visualização do que é bom ou não para o seu algoritmo.


## MISTURANDO COMPLEXIDADES ##
Se usarmos diversas complexidades juntas, no final vai acabar sendo uma dessas que iremos mostrar. 


![image](https://user-images.githubusercontent.com/113690864/191984424-523bab19-170f-4cc7-be48-ee70a8aab275.png)

- No caso, se precisamos realizar dois loops da mesma forma, mas sem alinhamento, então precisaremos eliminar as constantes. Esse tipo de algoritmo O(2n) é no final das coisas O(N).

![image](https://user-images.githubusercontent.com/113690864/191984499-9ba9d95b-1d8d-4369-b613-d31252c409f8.png)

- Outro exemplo, estamos fazendo umas mistura da fila, tendo a complexidade de O(1 + n/2 + n) que no final dá O(n).

## REFÊNCIAS EXTERNAS ##

-  https://www.freecodecamp.org/portuguese/news/o-que-e-a-notacao-big-o-complexidade-de-tempo-e-de-espaco/