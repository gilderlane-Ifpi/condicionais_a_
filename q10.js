const prompt = require('prompt-sync')();

 
function main() {
 
//entrada

    const diaAtual = Number(prompt('Informe que dia é hoje: '));
    const mesAtual = Number(prompt('Informe que mes é hoje: '));
    const anoAtual = Number(prompt('Informe que ano é hoje: '));

//processamento

        function dataValidaOuInvalida(dia, mes) {

            if((mes === 1 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) && (dia > 1 && dia <= 31)) {
                console.log(`Data válida !`);
            }   else if((mes === 3 || mes === 4 || mes === 9 || mes === 11) && (dia > 1 || dia <= 30)) {
                console.log('Data válida  !');
            }   else if(mes === 2 && dia > 1 && dia <= 28) {
                console.log(`Data válida !`);               
            }   else if(mes === 6 && dia > 1 && dia <= 29) {
                console.log('Data válida !');
            }   else if(mes === 2 && dia < 1 || dia > 28) {
                console.log('Data inválida !');
            }   else if(mes === 6 && dia < 1 || dia > 29) {
                console.log('Data inválida !');
            }
        }

// saida

dataValidaOuInvalida(diaAtual, mesAtual);

};

main();