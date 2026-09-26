// Un tipo personalizado que debe cumplirse
type Usuario = {
  nombre: string;
  readonly edad: number;
  apellido?: string;
  role?: roles;
  empresa?: {
    readonly nombre: string;
    readonly ubicacion?: string;
    readonly empleados?: number;
  };
};

// Una interfaz personalizada, cumple el mismo proposito
interface IUsuario {
  nombre: string;
  readonly edad: number;
  apellido?: string;
  empresa?: Empresa;
  role?: roles;
}

interface Empresa {
  readonly nombre: string;
  readonly ubicacion?: string;
  readonly empleados?: number;
}

type roles = "admin" | "owner" | "user";
type poderes = "Volar" | "Fuerza" | "Velocidad";
interface poder {
  poder: poderes[];
  saludar?: () => void;
}

// Typescript tambien posee el contrato de dos contratos como uno
// a esto se le denomina intersection type

type heroe = Usuario & poder;
