const prompt = require('prompt-sync')();

function main() {

// Entrada

    const primeiraCoordenadaX = Number(prompt('primeira coordenada x --> '));
    const primeiraCoordenadaY = Number(prompt('primeira coordenada y --> '));
    console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    const segundaCoordenadaX = Number(prompt('segunda coordenada x --> '));
    const segundaCoordenadaY = Number(prompt('segundaa coordenada y --> '));

// Processamento

        function areaRetanguloGeoAnalitica(x1, y1, x2, y2) {
            if(x2 > x1 && y2 > y1) {
                base = (x2 - x1);
                altura = (y2 - y1);
                area = base * altura;
                console.log(`Base x Altura = Área\n${base} x ${altura} = ${area}`);
            } else if(x1 > x2 && y1 > y2) {
                base = (x1 - x2);
                altura = (y1 - y2);
                area = base * altura;
                console.log(`Base x Altura = Área\n${base} x ${altura} = ${area}`);
            } else if(x1 > x2 && y2 > y1) {
                base = x1 - x2;
                altura = y2 - y1;  
                area = base * altura;
                console.log(`Base x Altura = Área\n${base} x ${altura} = ${area}`);              
            }  else if(x2 > x1 && y1 > y2) {
                base = x2 - x1;
                altura = y1 - y2;  
                area = base * altura;
                console.log(`Base x Altura = Área\n${base} x ${altura} = ${area}`);              
            }
        }

// Saída

areaRetanguloGeoAnalitica(primeiraCoordenadaX, primeiraCoordenadaY, segundaCoordenadaX, segundaCoordenadaY);

};

main();