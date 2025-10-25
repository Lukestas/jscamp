import { JobsListing } from "./JobsListing";

export function Jobs({jobs}){
    return(
        <section className="jobs-information-container">
            <h2>Resultados de búsqueda</h2>
            <JobsListing jobs={jobs}/>
        </section>
    )
}