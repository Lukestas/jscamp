import { Link } from "./Link";

export default function NavBar(){
    return(
        <nav>
            <Link href="/">Inicio</Link>
                <Link href="./search">Empleos</Link>
                <Link href="/Companies">Empresas</Link>
                <Link href="/Salaries">Salarios</Link>
                <a href="https://www.instagram.com/lukestas" target="_blank" rel="noopener noreferrer">Instagram</a>
            </nav>
    )
}