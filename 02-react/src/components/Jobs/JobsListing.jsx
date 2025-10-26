import { JobCard } from "./JobCard"

export function JobsListing({jobs}) {

    const jobslist=jobs.map(job=><JobCard key={job.id} job={job}/>)

    return (
        <div className="jobs-listings">
            {jobslist}
        </div>
    )
}