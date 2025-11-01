import { JobCard } from "./JobCard.jsx"

export function JobsListing({ jobs }) {

    const jobslist = jobs.map(job => <JobCard key={job.id} job={job} />)

    return (
        <section className="jobs-information-container">
            <h2>Resultados de búsqueda</h2>
            <div className="jobs-listings">
                {jobslist}
            </div>
        </section>
    )
}


