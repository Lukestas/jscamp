// INFERENCIA DE TIPO

// Sin decirle a typescript que nombre es texto,
// ya detecta el tipo con el valor que se le ingresa
const nombre = "Lukestas";
console.log(typeof nombre); // Respuesta string

// La ventaja que ofrece tanto typescript como la inferencia,
// es que solamente mostrará las funciones que sean correspondientes a ese tipo

// Al colocar punto cerca de la variable muestra las funciones de ese tipo
console.log(nombre.toLowerCase()); // Respuesta lukestas

// Al crear una variable vacia se puede indicar que tipo deberá respetar,
// es util para que al utilizarse esa variable solo acepte ese tipo y de error,
// al ingresarle cualquier otro
let numero: number;
// numero="lukestas" <-- Da error, numero solo acepta números, es decir, tipo number
numero = 3;
console.log(numero); // Respuesta 3

// Es posible indicar que una variable puede tener 2 tipos
// esto es posible con el union type ( | )
let edad: number | null = null; // Este indica que la edad puede ser un numero, o ser nulo
console.log(typeof edad); // Respuesta object, este caso en particular es por comportamiento de javascript
edad = 18;
console.log(typeof edad); // Respuesta number

// Hay que tener en consideración que las constantes no cuentan con una inferencia de tipo,
// es decir que esta indicará que su tipo será el mismo valor, ya que las constantes
// no son posible cambiarles sus datos posteriormente

const identificador = "ABC123"; // Tipo "ABC123"
let pais = "Costa Rica"; // Tipo string
