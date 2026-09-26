// Type Narrowing, estrechamiento de tipo
// Esta es la tecnica de reducir un tipo grande a un tipo mas especifico
// mediante comprobaciones

function procesar(valor: number | string) {
  console.log(valor);
  if (typeof valor === "number") {
    console.log("El valor es un numero");
  } else {
    console.log("El valor es una cadena");
  }
}

// La comprobación trustly es verificar si el parametro no es falso, nulo o vacio
// es una manera rapida de verificar si existen datos en ese parametro
function imprimirMensaje(mensaje: string | null | undefined) {
  //Comprobación trustly
  if (mensaje) {
    console.log(mensaje.toUpperCase());
  }
}

// InstanceOf Narrowing
function formatDate(value: Date | string): string {
  if (value instanceof Date) {
    return value.toUTCString();
  }
  return new Date(value).toUTCString();
}
