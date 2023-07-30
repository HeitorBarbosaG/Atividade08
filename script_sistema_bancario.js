var saldo_atual = 0
var saldo_inicial = prompt("Digite o seu saldo bancário inicial: ")
var valor_compra = prompt("Digite o valor da compra que deseja realizar: ")
saldo_atual = saldo_inicial-valor_compra
if(saldo_atual >= 0){
    document.write("A compra ocorreu corretamente e o seu saldo atual é de ")
    document.write(saldo_atual)
} else{
    document.write("Saldo insuficiente")
}