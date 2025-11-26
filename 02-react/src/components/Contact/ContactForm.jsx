import styles from "./ContactForm.module.css"
export default function ContactForm() {
    return (
        <section className={styles.contactForm}>
            <h2>Contactame</h2>
            <form action="">
                <label htmlFor="uName">Nombre</label>
                <input id="uName" name="uName" type="text" placeholder="Ingrese su nombre" />
                <label htmlFor="uEmail">E-mail</label>
                <input id="uEmail" name="uEmail" type="email" placeholder="nombre@dominio.com" />
                <label htmlFor="uPhone">Telefono</label>
                <input id="uPhone" name="uPhone" type="tel" placeholder="Ingrese su numero de contacto" />
                <label htmlFor="uMessage">Mensaje</label>
                <input id="uMessage" name="uMessage" type="text" />
                <button>Enviar</button>
            </form>
        </section>
    )
}