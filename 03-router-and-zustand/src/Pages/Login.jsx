import { NavLink } from "react-router";
import styles from "../PagesStyles/Login.module.css"
import { LoginForm } from "../components/Login/LoginForm";

export default function LoginPage() {
    return (
        <main className={styles.login}>
            <title>Inicio de sesión - DevJobs</title>
            <h1>Bienvenido de nuevo</h1>
            <p>Inicia sesión para encontrar tu próximo empleo</p>
            <section>
                <h2>Inicio de sesión</h2>
                <LoginForm />
                <div className={styles.noAccount}>
                    <span>¿No tienes una cuenta?</span>
                </div>
                <NavLink className={styles.register} to="/register">Registrarse</NavLink>
            </section>
        </main>
    )
}

