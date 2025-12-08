import { useId } from "react"
import styles from "./ContactForm.module.css"
import useContactForm from "../../hooks/useContactForm"
export default function ContactForm() {
    const userNameId=useId()
    const userEmailId=useId()
    const userPhoneId=useId()
    const userMessageId=useId()
    const {sendMessage}=useContactForm({userNameId,userEmailId,userPhoneId,userMessageId})


    return (
        <section className={styles.contactForm}>
            <h2>Contactame</h2>
            <form onSubmit={sendMessage}>
                <label htmlFor="uName">Nombre</label>
                <input id="uName" name={userNameId} type="text" placeholder="Ingrese su nombre" />
                <label htmlFor="uEmail">E-mail</label>
                <input id="uEmail" name={userEmailId} type="email" placeholder="nombre@dominio.com" required />
                <label htmlFor="uPhone">Telefono</label>
                <input id="uPhone" name={userPhoneId} type="tel" placeholder="Ingrese su numero de contacto" />
                <label htmlFor="uMessage">Mensaje</label>
                <input id="uMessage" name={userMessageId} type="text" required/>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}