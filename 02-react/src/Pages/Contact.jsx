import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import styles from "../PagesStyles/Contact.module.css"
export function ContactPage(){
    return(
        <main className={styles.contact}>
            <ContactInfo/>
            <ContactForm/>
        </main>
    )
}