// Primero definimos una funcion que suma los tres parámetros
function sumaTresNumeros(num1, num2, num3) {
  return num1 + num2 + num3;
}

// hago llamado a la funcion y damos valores
const resultado = sumaTresNumeros(2, 3, 5);
console.log(resultado); 

// defino la clase Coche
class Coche {
  constructor() {
    this.numeroPuertas = 0;
  }

  // esta funcion incrementa el numero de puertas
  agregarPuerta() {
    this.numeroPuertas++;
  }
}

// se crea objeto miCoche y se adiciona una puerta
const miCoche = new Coche();
miCoche.agregarPuerta();

// imprimir por pantalla número de puertas que tiene el objeto miCoche
console.log(miCoche.numeroPuertas); 
