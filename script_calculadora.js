var numero1 = prompt("Digite um número: ")
var numero2 = prompt("Digite outro número: ")
let operacao = prompt("Digite o sinal da operação que deseja efetuar: ")
var total = 0
if(operacao === "+"){
    total = numero1+numero2
    document.write(total)
} else if(operacao === "-"){
    total = numero1-numero2
    document.write(total)
} else if(operacao === "*"){
    total = numero1*numero2
    document.write(total)
}else{
    total = numero1/numero2
    document.write(total)
}