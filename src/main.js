export default class App {
 
    esPar(numero){
     if(numero === 0) {
         return false;
     }  else if (numero %2 === 0 ){
         return true;
     } else {
         return false;
     }
    }

    esMultiplo(numero1, numero2){
        if(numero1 % numero2 === 0){
           return true;
        } else {
           return false;
        }
    }
   
    calcularSalario(tipoTrabajador, horasTrabajadas){
        let resultado;

        switch(tipoTrabajador){
            case 1:
                resultado = horasTrabajadas * 20;
                break;
            case 2:
                resultado = horasTrabajadas * 22;
                break;
            case 3:
                resultado = horasTrabajadas * 25;
                break;
            default :
                resultado = -1;
        }
        return resultado;
    }

    obtenerCalificacion(calificacionNumerica){
        let calificacionLetras;

        if (calificacionNumerica >= 0 && calificacionNumerica <= 5){
             calificacionLetras = "C";
        } else if (calificacionNumerica === 6){
            calificacionLetras = "B";
        } else if (calificacionNumerica === 7){
            calificacionLetras = "B";
        } else if (calificacionNumerica === 8){
            calificacionLetras = "A";
        } else if (calificacionNumerica === 9){
            calificacionLetras = "A";
        } else if (calificacionNumerica === 10){
            calificacionLetras = "A+";
        } else {
            calificacionLetras = "ERROR";
        }

        return calificacionLetras
    }

    obtenerCercano100(numero1, numero2, numero3){
        let resta1= Math.abs(100-numero1);
        let resta2= Math.abs(100-numero2);
        let resta3= Math.abs(100-numero3);
        let masCercano;

        if (resta1 < resta2 && resta1 < resta3){
            masCercano = numero1;
        } else if (resta2 < resta1 && resta2 < resta3){
            masCercano = numero2;
        } else {
            masCercano = numero3;
        }
        return masCercano;
    }

    calcular(numero1, numero2, operador){
        let resultado;

        switch(operador){
            case "+" :
                resultado = numero1 + numero2;
                break;
            case "-":
                resultado = numero1 - numero2;
                break;
            case "*" :
                resultado = numero1 * numero2;
                break;
            case "/" :
                resultado = numero1 / numero2;
                break;
            case "%" :
                resultado = numero1 % numero2;
                break;
            default:
                resultado = -1;

        }

        return resultado;
    }

    costoRenta(peliculas, dia){
        let resultado;

        switch (dia){
            case 1:
                resultado = ( Math.trunc(peliculas / 3) * 60 ) + ((peliculas % 3) * 25);
                break;
            case 2: 
                resultado = (Math.trunc(peliculas / 2) * 25) + ((peliculas % 2) * 25);
                break;
            case 3:
                resultado = ((peliculas * 25) * 0.85 );
                break;
            case 4:
                resultado = (Math.trunc(peliculas / 2) * 25) + ((peliculas % 2) * 25);
                break;
            case 5:
                resultado = ( Math.trunc(peliculas / 3) * 60 ) + ((peliculas % 3) * 25);
                break;
            case 6:
                resultado = peliculas * 25;
                break;
            case 7:
                resultado = peliculas * 25;
                break;
            default :
                resultado = -1;
        }
        return resultado;
    }

    costoBoletos(boletos, zona){
        let resultado;

        switch(zona){
            case 1:
                resultado = boletos * 300;
                break;
            case 2:
                resultado = boletos * 450;
                break;
            case 3:
                resultado = boletos * 700;
                break;
            default:
                resultado = -1;
        }
        if (resultado >= 2000){
            resultado = resultado * .93;
        }
        return resultado;
    }
}

let app = new App();

console.log(app.esPar(0));
console.log(app.esPar(5));
console.log(app.esPar(6));

console.log(app.esMultiplo(144,12));
console.log(app.esMultiplo(144,11));

console.log(app.calcularSalario(1, 2));
console.log(app.calcularSalario(2, 2));
console.log(app.calcularSalario(3, 2));
console.log(app.calcularSalario(5, 2));

console.log(app.obtenerCalificacion(0));
console.log(app.obtenerCalificacion(4));
console.log(app.obtenerCalificacion(5));
console.log(app.obtenerCalificacion(6));
console.log(app.obtenerCalificacion(7));
console.log(app.obtenerCalificacion(8));
console.log(app.obtenerCalificacion(9));
console.log(app.obtenerCalificacion(10));
console.log(app.obtenerCalificacion(11));

console.log(app.obtenerCercano100(122, 134, 158));
console.log(app.obtenerCercano100(22, 13, 1));
console.log(app.obtenerCercano100(122, 34, 15));

console.log(app.calcular(100, 3, "+" ));
console.log(app.calcular(100, 3, "-" ));
console.log(app.calcular(100, 3, "*" ));
console.log(app.calcular(100, 3, "/" ));
console.log(app.calcular(100, 3, "%" ));
console.log(app.calcular(100, 3, "a" ));

console.log(app.costoRenta(8,1));
console.log(app.costoRenta(9,1));
console.log(app.costoRenta(8,2));
console.log(app.costoRenta(9,2));
console.log(app.costoRenta(8,3));
console.log(app.costoRenta(9,4));
console.log(app.costoRenta(8,4));
console.log(app.costoRenta(9,5));
console.log(app.costoRenta(8,5));
console.log(app.costoRenta(8,6));
console.log(app.costoRenta(8,7));
console.log(app.costoRenta(9,10));

console.log(app.costoBoletos(3, 1));
console.log(app.costoBoletos(10, 1));
console.log(app.costoBoletos(3, 2));
console.log(app.costoBoletos(10, 2));
console.log(app.costoBoletos(2, 3));
console.log(app.costoBoletos(10, 3));
console.log(app.costoBoletos(3, 4));
