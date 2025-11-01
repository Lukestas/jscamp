import { useState } from "react"

export function JobCard({ job }) {
    const [isApplied, setIsApplied] = useState(false)

    const handleApplyClick = () => {
        setIsApplied(true)
    }

    const buttonClasses = isApplied ? "button-apply-job is-applied" : "buttpn-apply-job"
    const buttonText = isApplied ? "Aplicado!!!" : "Aplicar"
    return (
        <article
            className="job-listing-card"
            data-location={job.data.location}
            data-nivel={job.data.nivel}
            data-contract={job.data.contract}
            data-technology={job.data.technology}
        >
            <div>
                <h3>{job.titulo}</h3>
                <small>{job.empresa} | {job.ubicacion}</small>
                <p>{job.descripcion}</p>
            </div>
            <button className={buttonClasses} onClick={handleApplyClick}>{buttonText}</button>
        </article>
    )
}