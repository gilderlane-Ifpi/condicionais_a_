const prompt = require('prompt-sync')();


function main() {

// Entrada

    const horaInicial = Number(prompt('Informe a hora de início do jogo: '));
    const minutoInicial = Number(prompt('Informe o minuto inicial do jogo: '));
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    const horaFinal = Number(prompt('Informe a hora final do jogo: '));
    const minutoFinal = Number(prompt('Informe o minuto final do jogo: '));

// Processamento

        function duracao(hInicial, mInicial, hFinal, mFinal) {
            if(hFinal > hInicial) {
                horasParaMinutos  = ((hFinal - hInicial) * 60);
                variacaoMinutos = (mFinal - mInicial);
                minutosTotais = variacaoMinutos + horasParaMinutos;
                horasTotais = (minutosTotais / 60) - ((minutosTotais / 60) % 1);
                minutosDasHoras = Math.round(((minutosTotais / 60) % 1) * 60);
                console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
                console.log(`Duração da partida: ${horasTotais}:${minutosDasHoras} horas`);
            }   else if(hInicial > hFinal) {
                horasParaMinutos = ((24 - (hInicial - hFinal)) * 60);
                variacaoMinutos = (mFinal - mInicial);
                minutosTotais = variacaoMinutos + horasParaMinutos;
                horasTotais = (minutosTotais / 60) - ((minutosTotais / 60) % 1);
                minutosDasHoras = Math.round(((minutosTotais / 60) % 1) * 60);
                console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
                console.log(`Duração da partida: ${horasTotais}:${minutosDasHoras} horas`);
            }
        }

// Saída

duracao(horaInicial, minutoInicial, horaFinal, minutoFinal);

}

main();