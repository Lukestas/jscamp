import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router"
import { JobSection } from '../components/JobDetail/JobSection'
import styles from "../PagesStyles/JobDetail.module.css"
import { useAuthStore } from "../store/authStore"
import { useFavoriteStore } from "../store/favoriteStore"
//import { useAuth } from "../hooks/useAuth"



export default function JobDetail() {


    const { jobId } = useParams()

    const [job, setJob] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
            .then(res => {
                if (!res.ok) throw new Error('Job Not Found')
                return res.json()
            })
            .then(json => {
                setJob(json)
            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [jobId])

    if (isLoading) {
        return <div className={styles.loading}>
            <p>Cargando</p>
        </div>
    }

    if (error || !job) {
        return <div className={styles.jobNotFound}>
            <h2>Oferta no encontrada</h2>
            <button onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
    }

    return (
        <main className={styles.jobDetail}>
            <nav>
                <Link to="/search">Empleos</Link>
                <span>/</span>
                <span>{job.titulo}</span>
            </nav>

            <header>
                <div>
                    <h1>{job.titulo}</h1>
                    <p>{job.empresa} - {job.ubicacion}</p>
                </div>
                <div>
                    <JobApplyButton loading={isLoading} jobId={job.id} />
                </div>
            </header>
            <JobSection title="Descripción del puesto" content={job.content.description} />
            <JobSection title="Responsabilidades" content={job.content.responsibilities} />
            <JobSection title="Requisitos" content={job.content.requirements} />
            <JobSection title="Aceca de la empresa" content={job.content.about} />
        </main>
    )
}

function JobApplyButton({ loading, jobId }) {
    const { isLoggedIn } = useAuthStore()
    const { isFavorite, toggleFavorite } = useFavoriteStore()
    return (
        <>
            <button
                className={!loading
                    ? styles.isDisable
                    : styles.isActive}
                disabled={!isLoggedIn}
            >{isLoggedIn ? "Aplicar" : "Inicia sesión para aplicar"}
            </button>
            {isLoggedIn && <button
                className={styles.buttonFavorite}
                onClick={() => toggleFavorite(jobId)}>
                {isFavorite(jobId) ? '💛' : '🤍'}
            </button>}
        </>
    )
}