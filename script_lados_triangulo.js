let ladoP = prompt("Digite o tamanho de um lado de um triângulo: ")
let ladoS = prompt("Digite o tamanho do outro lado de um triângulo: ")
let ladoT = prompt("Digite o tamanho do terceiro de um triângulo: ")
let soma1 = parseInt(ladoP)+parseInt(ladoS)
let soma2 = parseInt(ladoP)+parseInt(ladoT)
let soma3 = parseInt(ladoS)+parseInt(ladoT)
if(soma1 > ladoT && soma2 > ladoS && soma3 > ladoP){
    document.write("Os lados formam um triângulo")
    if(ladoP === ladoS && ladoS === ladoT){
        document.write(" que é equilátero")
    } else if(ladoP === ladoS || ladoP === ladoT || ladoS === ladoT){
        document.write(" que é isósceles")
    } else{
        document.write(" que é escaleno")
    }
} else{
    document.write("Os lados não formam um triângulo")
}