# SUMMARY ON THE RECURSIVIDADE #
### É uma forma de resoler problemas, obetendo a noção de _repetir algo similar_ ###

De maneira geral, recursividade é você criar uma função e fazer ela orbitar por si mesma, ou seja, um loop, mas, sempre, com uma parte fixa, pela lógica.

Essa técnica pode ser interpretada a partir de duas perspectivas:

- **Algoritmo:** Você pega um problema e "divide para conquistar", ou seja, aplicar um pilar da lógica computacional - Decomposição -. Reduzindo o problema inicial em uma versão mais simplificada do mesmo problema.

- **Semântica:** É uma técnica de programação em que a função invoca a si mesma. Precisa ter um ou mais casos mais simples para resolver.

![image](https://th.bing.com/th/id/R.2638ff1b56990684c22f195589fff9bd?rik=4AEMvtcb14bHDA&pid=ImgRaw&r=0)


## Casos de Uso - Recursividade ##

![image](https://user-images.githubusercontent.com/113690864/191952674-f7ebb131-1195-4b1c-a26d-ccc168e2c662.png)

- **Potência:** Calcular 2^5
    - 2^5 = 2 x 2^4
    - 2^5 = 2 x 2 x 2^3
    - 2^5 = 2 x 2 x 2 x 2^2
    - ...

![image](https://user-images.githubusercontent.com/113690864/191965867-eb6085b9-6c18-4e8f-853b-091b1d9c1290.png)

- **Fatorial:** Calcular n!
    - n! = n . (n-1)!
    - 4! = 4.3!
    - 4! = 4.3.2!
    - ...

## Referências ##

- Playlist: EstruturaDeDadosJS - https://www.youtube.com/watch?v=R0opvtDycNE