// ANY
// Este tipo de dato debe ser evitado, no tiene sentido usarlo
// si se utiliza typescript, hay que usar el tipado

let cualquierCosa: any;
cualquierCosa = 1;
cualquierCosa = "hola";
cualquierCosa = true;
cualquierCosa = Symbol("adios");
cualquierCosa = [];
cualquierCosa = {};
cualquierCosa = undefined;
cualquierCosa = null;

// UNKNOWN
// Es una alternativa segura de any
// unknown es la manera correcta para evitar hacer llamadas de funciones
// que en realidad no tiene ese tipo, sin verificar antes su tipo
// cosa contraria que sucede con any
let desconocido: unknown = "hola";

// type narrowing, es el nombre para la verificación de tipo
if (typeof desconocido === "string") {
  desconocido.toUpperCase();
} else if (typeof desconocido === "number") {
  desconocido = desconocido + 20;
}

// VOID
// void es la manera de indicar que una función no devolverá nada, es decir
// que realizará converciones y asignaciones pero no devolverá datos al invocarse
function saludar(): void {
  console.log("Hola!");
}

// NEVER
// never es la representación de algo que nunca sucederá
// es util al compilar a javascript, para tener un salvavidas
// si lo que se realiza dentro de la función no deberia ocurrir
function verError(mensaje: string): never {
  throw new Error(mensaje);
}

function revisarValor(x: number | string) {
  if (typeof x === "number") {
    console.log("Es un numero:", x);
  } else if (typeof x === "string") {
    console.log("Es una texto:", x);
  } else {
    verError("Tipo no soportado");
  }
}
