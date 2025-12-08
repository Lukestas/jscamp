import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import styles from "../PagesStyles/Contact.module.css"
export function ContactPage(){
    return(
        <main className={styles.contact}>
            <title>Contartame - DevJobs</title>
            <h1>Todo lo que se requiere saber sobre mi</h1>
            <p>Disponibilidad en todo instante</p>
            <ContactInfo/>
            <ContactForm/>
        </main>
    )
}