// Typescript tambien infiere los tipos de un objeto,
// para estos casos tan particulares donde se pueden tener varios
// casos donde se use el mismo tipo y quieres que se respeten los datos
// que tendran estos objetos, es recomendable generar un contrato de tipo personalizado

// Por inferencia, este usuario tiene un tipo {nombre: string, edad: number}
const primerUsuario = {
  nombre: "Julián",
  edad: 25,
  apellido: "Luque",
};

// Un tipo personalizado que debe cumplirse
/* 
type Usuario = { 
  nombre: string; 
  edad: number 
};
*/

// Una interfaz personalizada, cumple el mismo proposito
/* 
interface IUsuario {
  nombre: string;
  edad: number;
}
*/

// Aunque se pueden declarar en el mismo archivo, es recomendable
// tener estos contratos fuera del archivo, separado, para que sea
// más sencillo su modificación y escalado a futuro, además
// que puede ser invocados para indicar que una variable
// utilizará este contrato
// como ejemplo de escalado y opcional, el apellido se le agrega un ?
// para indicar que ese contrato no tiene que cumplir
// con esa propiedad, puede venir o no

const segundoUsuario: Usuario = {
  nombre: "Enrique",
  apellido: "Lopez",
  edad: 25,
};

const tercerUsuario: IUsuario = {
  nombre: "Junior",
  edad: 25,
};

// tambien se puede indicar que se prohibe la modificación de un objeto
// luego de declarado, colocando readonly en la propiedad que no se permite modificar
// como ejemplo edad tendra readonly

// es posible hacer que un objeto no sea modificable ninguna de sus propiedades
// de dos formas, declarando el arreglo como una constante, o utilizando
// la función de Object.freeze, esto es posible para el tiempo de ejecución
// typescript te ayuda a detectar los errores, pero al convertirse en javascript
// estos errores pueden ocurrir si no se previenen

const cuartoUsuario: Usuario = {
  nombre: "Laura",
  edad: 27,
} as const;

const quintoUsuario: IUsuario = Object.freeze({
  nombre: "Lesly",
  edad: 23,
});

// Tambien es posible agregar a los contratos de objetos otros objetos objetos
// ya sea dentro del mismo contrato o declarandolo como tipo dentro del contrato
// se agrega un ejemplo a una interfaz nueva en los types.d.ts

const sextoUsuario: IUsuario = {
  nombre: "Franks",
  edad: 24,
  apellido: "Vilca",
  role: "admin",
  empresa: {
    nombre: "Encora",
    ubicacion: "Lima Peru",
    empleados: 60,
  },
} as const;

const septimoUsuario: Usuario = Object.freeze({
  nombre: "Yorlin",
  edad: 21,
  apellido: "Quispe",
  role: "user",
  empresa: {
    nombre: "Partner Tech",
    ubicacion: "Lima Peru",
    empleados: 60,
  },
});

// Typescript tambien posee el contrato de dos contratos como uno
// a esto se le denomina intersection type

const superHeroe: heroe = {
  nombre: "Tony",
  edad: 40,
  poder: ["Fuerza", "Velocidad"],
};
