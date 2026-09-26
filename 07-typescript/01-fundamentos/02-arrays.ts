// Los arrays aunque se les indique que tipo sera un arreglo
// y que sea una constante, te seguira indicando que tipos de
// valores son los que recibira

const edades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Inferencia number[]
const nombres = ["Julián", "Enrique"]; // Inferencia string[]

const juegos: string[] = ["God Of War", "Minecraft", "Ark"];
const annos: number[] = [2025, 2026, 2027, 2028];

// Los arreglos pueden ser indicados de dos maneras
// no afecta cual tipo de declaración se utilice
const vecinos: string[] = ["Juan", "Ericka", "Warner"]; // tipo string[]
const grados: Array<number> = [0, 90, 180, 270, 360]; // tipo number[]

// Es recomendable indicar los tipos en los arreglos para evitar el tipo any
// any se utiliza cuando no se sabe que tipo de dato se tendra en la variable
// pero esto rompe con la idea de usar typescript
// ya que any permite ingresar cualquier valor dentro de ese arreglo
let vacio = []; // tipo any[]
vacio.push(1);
vacio.push(true);
vacio.push("Andres");

// Si se requiriera que un arreglo pueda ser de dos tipos o más
// es posible indicandolo usando parentesis para el tipo seguido de la declaración
const mixto: (string | number | boolean)[] = []; // Aceptará cualquiera de estos 3 tipos

// Aunque las constantes no pueden ser modificados sus datos
// se puede saltar esta regla con los arreglos al introducir
// más datos del mismo tipo al arreglo
// es decir que siempre que se cumpla su tipo, será permitido

// edades.push("Manzana") <-- da error al ser un numero
nombres.push("Junior"); // Permite agregarlo
