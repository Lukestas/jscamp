import { NavLink } from "react-router";
import RegisterForm from "../components/Register/RegisterForm";
import styles from "../PagesStyles/Register.module.css"

export default function RegisterPage() {
    return (
        <main className={styles.registerPage}>
            <h1>Registro de usuario</h1>
            <p>Disfrute de la web registrandose</p>
            <section>
                <h2>Registrate</h2>
                <RegisterForm />
                <div className={styles.noAccount}>
                    <span>¿Ya tienes cuenta?</span>
                </div>
                <NavLink className={styles.register} to="/login">Inicia Sesión</NavLink>
            </section>
        </main>
    )
}

