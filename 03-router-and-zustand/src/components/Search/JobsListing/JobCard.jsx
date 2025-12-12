import { useState } from "react"
import { Link } from "../../Header/Link"
import styles from "./JobCard.module.css"
import { useFavoriteStore } from "../../../store/favoriteStore"
import { useAuthStore } from "../../../store/authStore"

export function JobCard({ job }) {



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
                <ApplyAndFavoriteButton jobId={job.id} />
            </div>

        </article>
    )
}

function ApplyAndFavoriteButton({ jobId }) {
    const { toggleFavorite, isFavorite } = useFavoriteStore()
    const { isLoggedIn } = useAuthStore()
    const [isApplied, setIsApplied] = useState(false)

    const handleApplyClick = () => {
        setIsApplied(true)
    }

    const buttonText = isApplied ? "Aplicado!" : "Aplicar"

    const buttonClasses = isApplied
        ? `${styles.buttonApplyJob} ${styles.isApplied}`
        : styles.buttonApplyJob

    return (
        <>
            <button
                disabled={!isLoggedIn}
                className={buttonClasses}
                onClick={handleApplyClick}>
                {buttonText}
            </button>
            <button
                disabled={!isLoggedIn}
                className={styles.buttonFavorite}
                onClick={() => toggleFavorite(jobId)}>
                {isFavorite(jobId) ? '💛' : '🤍'}
            </button>
        </>
    )
}