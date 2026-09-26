// TIPAR PARAMETROS Y RETORNO
// La siguiente funcion recibe solo numeros e indica que el resultado debe ser tambien un numero
function sumar(a: number, b: number): number {
  return a + b;
}

const restarYSalular = (a: number, b: number, nombre?: string): number => {
  if (nombre) {
    console.log("Hola", nombre);
  }
  return a - b;
};

console.log(restarYSalular(1, 2, "Lukestas"));

function crearUsuario(nombre: string, rol: string = "User") {
  console.log("Creado:", nombre, "rol:", rol);
}
crearUsuario("Julián");
crearUsuario("Enrique", "Admin");

// Tipo de funcion

type OperacionMatematica = (a: number, b: number) => number;
const dividir: OperacionMatematica = (a, b) => a / b;
console.log(dividir(10, 5));
