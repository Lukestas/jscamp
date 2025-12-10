import { NavLink } from "react-router"
import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <h1>
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd"
                        d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                        fill="currentColor" fillRule="evenodd"></path>
                </svg>DevJobs
            </h1>
            <nav>
                <NavLink className={({ isActive }) => isActive ? styles.isActive : ''} to="/">Inicio</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.isActive : ''} to="./search">Empleos</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.isActive : ''} to="/contact">Contacto</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.isActive : ''} to="/Salaries">Salarios</NavLink>
                <NavLink to="https://www.instagram.com/lukestas" target="_blank" rel="noopener noreferrer">Instagram</NavLink>
            </nav>
            <div>
                <a href="">Subir CV</a>
                {/* <devjobs-avatar service="github" username="Lukestas"></devjobs-avatar> */}
            </div>
        </header>
    )
}