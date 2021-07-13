const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){

// Entrada

const AtDia = (prompt('Digite o dia atual:'))
const AtMes= (prompt('Digite o Mes atual:'))
const AtAno = (prompt('Digite o Ano atual:'))
const NaDia = (prompt('Digite o dia voce nasceu:'))
const NaMes = (prompt('Digite o Mes voce nasceu:'))
const NaAno = (prompt('Digite o Ano voce nasceu:'))

const ano = calculo(AtAno,NaAno)

// processamento e saida

if (AtMes<NaMes || (AtMes==NaMes && AtDia < NaDia)) {
    
    console.log(`${ano-1} Anos`)
}
else {
    console.log(`${ano} Anos`)
}

}

function calculo(A,B){
  const res = A-B
  return res
    

}

main()