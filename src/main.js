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