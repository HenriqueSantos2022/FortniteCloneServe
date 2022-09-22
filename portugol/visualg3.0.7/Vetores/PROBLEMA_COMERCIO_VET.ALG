Algoritmo "Problema_comercio_vet"

Var

N, i : inteiro
abaixo, entre, acima : real
valorTcompra : real
valorTvenda : real
percentualLucro : real
lucroT :real
lucroFinal : real
Produtos : vetor [0..9] de caractere
PrecoC : vetor [0..9] de real
PrecoV : vetor [0..9] de real
Inicio

escreval("Serao digitados dados de quantos produtos?")
leia(N)

  para i de 0 ate N-1 faca
  escreval("Produto" ,i+1, ":")
  escreval("Nome:")
  leia(Produtos[i])
  escreval("Preco de compra:")
  leia(PrecoC[i])
  escreval("Preco de venda:")
  leia(PrecoV[i])
fimpara

  abaixo <- 0
  entre <- 0
  acima <-0
  para i de 0 ate N-1 faca
  lucroT <- PrecoC[i] - PrecoV[i]
  percentualLucro <- lucroT * 100 / PrecoC[i]

    se percentualLucro < 10 entao
       abaixo <- abaixo +1
    senao
       se percentualLucro <= 20 entao
       entre <- entre +1
    senao
       acima <- acima +1
    fimse
  fimse

    valorTcompra <-0
    valorTvenda <-0
    para i de 0 ate N-1 faca
    valorTcompra <- valorTcompra + PrecoC[i]
    valorTvenda <-  valorTvenda + PrecoV[i]
fimpara


    lucroFinal <- valorTvenda -  valorTcompra

    escreval("RELATORIO:")
    escreval("Lucro abaixo de 10%: ", abaixo)
    escreval("Lucro entre 10% e 20%:", entre)
    escreval("Lucro acima de 20%:", acima)
    escreval("Valor total de compra:", valorTcompra:4:2)
    escreval("Valor total de venda:", valorTvenda:4:2)
    escreval("Lucro total: ",  lucroFinal:4:2)
    
fimpara

Fimalgoritmo




