const prompt = require('prompt-sync')();

function main() {

// Entrada

    const dia01 = Number(prompt('Informe o dia da primeira data: '));
    const mes01 = Number(prompt('Informe o mes da primeira data: '));
    const ano01 = Number(prompt('Informe o ano da primeira data: '));
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    const dia02 = Number(prompt('Informe o dia da segunda data: '));
    const mes02 = Number(prompt('Informe o mes da segundaa data: '));
    const ano02 = Number(prompt('Informe o ano da segunda data: '));   

// Processamento

        function data(pDia, pMes, pAno, sDia, sMes, sAno) {
            if(pAno === sAno) {
                if(pMes < sMes) {
                    console.log('A segunda data é mais recente');
                }   else if(pMes > sMes){
                    console.log('A primeira data é mais recente');
                }   else if(pMes === sMes) {
                        if(pDia < sDia) {
                            console.log(`A segunda data é mais recente`);
                        }   else if(pDia > sDia) {
                            console.log('A primeira data é mais recente');
                        }
                }
            }   else if(pAno > sAno) {
                console.log('A primeira data é mais recente !');
            }   else if(pAno < sAno) {
                console.log('A segunda data é mais recente');
            }
        }

// Saída

data(dia01, mes01, ano01, dia02, mes02, ano02);

    };

main()