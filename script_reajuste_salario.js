var salario = prompt("Digite o salário do colaborador: ")
var aumento = 0
var total = 0
if(salario <= 280){
    aumento = salario*0.2
    total = salario*1.2
    document.write("Salário antes do reajuste: ",salario)
    document.write("\n Percentual de aumento aplicado: 20%")
    document.write("\n Valor do aumento: ",aumento)
    document.write("\n Novo salário: ",total)
}else if(280 < salario <= 700){
    aumento = salario*0.15
    total = salario*1.15
    document.write("Salário antes do reajuste: ",salario)
    document.write("\n Percentual de aumento aplicado: 15%")
    document.write("\n Valor do aumento: ",aumento)
    document.write("\n Novo salário: ",total)
} else if(700 < salario <= 1500){
    aumento = salario*0.1
    total = salario*1.1
    document.write("Salário antes do reajuste: ",salario)
    document.write("\n Percentual de aumento aplicado: 10%")
    document.write("\n Valor do aumento: ",aumento)
    document.write("\n Novo salário: ",total)
}else{
    aumento = salario*0.05
    total = salario*1.05
    document.write("Salário antes do reajuste: ",salario)
    document.write("\n Percentual de aumento aplicado: 5%")
    document.write("\n Valor do aumento: ",aumento)
    document.write("\n Novo salário: ",total)
}