import styles from "./ContactInfo.module.css"
export default function ContactInfo() {
    return (
        <section className={styles.contactInfo}>
            <h2>Acerca de mi</h2>
            <div>
                <a href="https://github.com/Lukestas" target="_blank" rel="noopener noreferrer"><img src="./lukestas.png" alt="Lukestas Image" /></a>
                <p>Soy estudiante de ingenieria del software, busco expandir mis conocimientos y poder vivir de esta experencia. Me emociona conocer nuevas tecnologias y metodos de realizar lo que ya conozco, pues considero que nunca es suficiente conocimiento y todas las mentes pueden construir lo mismo de diversas formas.</p>
            </div>
        </section>
    )
}