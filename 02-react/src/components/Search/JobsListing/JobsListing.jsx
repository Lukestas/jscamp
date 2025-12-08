import { JobCard } from "./JobCard.jsx"
import styles from "./JobsListing.module.css"

export function JobsListing({ jobs }) {

    const jobslist = jobs.length === 0 ? <p className={styles.noJobs}>No hay resultados</p> : jobs.map(job => <JobCard key={job.id} job={job} />)

    return (
        <section className={styles.jobsInformation}>
            <h2>Resultados de búsqueda</h2>
            <div className={styles.jobsListing}>
                {jobslist}
            </div>
        </section>
    )
}


