const prompt = require('prompt-sync')();
 
function main() {
 
// Entrada

    const diaAtual = Number(prompt('Informe que dia é hoje: '));
    const mesAtual = Number(prompt('Informe que mes é hoje: '));
    const anoAtual = Number(prompt('Informe que ano é hoje: '));
    const diaNascimento = Number(prompt('Informe que dia você nasceu: '));
    const mesNascimento = Number(prompt('Informe que mes você nasceu: '));
    const anoNascimento = Number(prompt('Informe que ano você nasceu: '));

// Processamento

        function calculadoraDeIdade(diaA, mesA, anoA, diaN, mesN, anoN) {
                anos = ((anoA - anoN) * 12);
                meses = (mesA - mesN);
                dias = ((diaA - diaN) / 30);
                anosTotaisEmMeses = anos + meses + dias;
                anosReal = (anosTotaisEmMeses / 12) - ((anosTotaisEmMeses/12) % 1);
                mesesReal = (((anosTotaisEmMeses/12) % 1) * 12) - ((((anosTotaisEmMeses/12) % 1) * 12) % 1);
                if(diaA > diaN) {
                    console.log(`Tempo de vida ${anosReal} anos, ${mesesReal} meses e ${diaA - diaN} dias`);
                } else if(diaN > diaA) {
                    console.log(`Tempo de vida ${anosReal} anos, ${mesesReal} meses e ${Math.trunc((((((anosTotaisEmMeses/12) % 1) * 12) % 1) * 30))} dias`);
    }
}

// Saída

calculadoraDeIdade(diaAtual, mesAtual, anoAtual, diaNascimento, mesNascimento, anoNascimento);

    };

main()