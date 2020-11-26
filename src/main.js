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