const prompt = require('prompt-sync')();

function main(){

// Entrada

    const primeiraNota = Number(prompt('Informe a primeira nota: '));
    const segundaNota = Number(prompt('Informe a segunda nota: '));

// Processamento

        function notasAlunos(num1, num2) {
            media = (num1 + num2) / 2;
            if(media >= 7) {
                console.log('Aprovado !');
            }   else if(media < 7) {
                console.log('Você ficou de prova final !');
                notaExameFinal = Number(prompt('Informe a sua nota no exame final: '));
                mediaFinal = (media + notaExameFinal) / 2;
                if(mediaFinal >= 5) {
                    console.log('Aprovado !');
                }   else{
                    console.log('Reprovado !');
                }
            }
        }

// Saída

notasAlunos(primeiraNota, segundaNota);

};

main();