const prompt = require('prompt-sync')(); 

function main(){

// Entrada
    const quantidadeHorasProfessorUm = Number(prompt('Informe a quantidade de horas dada pelo professor um: '));
    const valorPorHoraProfessorUm = Number(prompt('Informe o valor da aula do professor um: '));
    const quantidadeHorasProfessorDois = Number(prompt('Informe a quantidade de horas dada pelo professor dois: '));
    const valorPorHoraProfessorDois = Number(prompt('Informe o valor da aula do professor dois: '));

// Processamento

        function salarioProfessores(num1, num2, num3, num4) {
            salarioPrimeiroProfessor = num1 * num2;
            salarioSegundoProfessor = num3 * num4;
            if(salarioPrimeiroProfessor > salarioSegundoProfessor) {
                console.log(`O salário do primeiro professor é maior !`);
            }   else if(salarioSegundoProfessor > salarioPrimeiroProfessor) {
                console.log(`O salário do segundo professor é maior !`);
            }
        };
    
// saida

salarioProfessores(quantidadeHorasProfessorUm, valorPorHoraProfessorUm, quantidadeHorasProfessorDois, valorPorHoraProfessorDois);

};

main();