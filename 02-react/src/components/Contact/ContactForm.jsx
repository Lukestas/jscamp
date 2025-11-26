import styles from "./ContactForm.module.css"
export default function ContactForm() {
    return (
        <section className={styles.contactForm}>
            <h2>Contactame</h2>
            <form action="">
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" />
                <label htmlFor="">E-mail</label>
                <input type="email" placeholder="nombre@dominio.com" />
                <label htmlFor="">Telefono</label>
                <input type="tel" placeholder="Ingrese su numero de contacto" />
                <label htmlFor="">Mensaje</label>
                <input type="text" />
            </form>
        </section>
    )
}