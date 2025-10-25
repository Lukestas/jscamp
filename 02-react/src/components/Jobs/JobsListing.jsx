import { JobCard } from "./JobCard"

export function JobsListing({jobs}) {
    return (
        <div className="jobs-listings">
            {jobs.map((job, index) => (
                <JobCard job={job} key={index}/>
            ))}
        </div>
    )
}