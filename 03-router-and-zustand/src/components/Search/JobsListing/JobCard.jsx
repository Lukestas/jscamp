import { useState } from "react"
import { Link } from "../../Header/Link"
import styles from "./JobCard.module.css"

export function JobCard({ job }) {
    const [isApplied, setIsApplied] = useState(false)

    const handleApplyClick = () => {
        setIsApplied(true)
    }

    const buttonClasses = isApplied 
    ? `${styles.buttonApplyJob} ${styles.isApplied}`
    : styles.buttonApplyJob

    const buttonText = isApplied ? "Aplicado!" : "Aplicar"
    return (
        <article
            className={styles.jobCard}
            data-location={job.data.location}
            data-nivel={job.data.nivel}
            data-contract={job.data.contract}
            data-technology={job.data.technology}
        >
            <div>
                <Link href={`/job/${job.id}`}>{job.titulo}</Link>
                <small>{job.empresa} | {job.ubicacion}</small>
                <p>{job.descripcion}</p>
            </div>
            <div className={styles.buttonsJobCard}>
                <Link href={`/job/${job.id}`}>Ver detalles</Link>
                <button className={buttonClasses} onClick={handleApplyClick}>{buttonText}</button>
            </div>

        </article>
    )
}