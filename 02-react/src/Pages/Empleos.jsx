import { useState } from "react"
import { Jobs } from "../components/Jobs/Jobs"
import { Search } from "../components/Jobs/Search"
import { Pagination } from "../components/Jobs/Pagination"
import JobsData from "../data.json"

export function Empleos() {
    const [filters, setFilters] = useState({
        search: "",
        contract: "",
        location: "",
        technology: "",
        level: ""
    })

    const filteredJobs = JobsData.filter((job) => {
        const query = filters.search.toLowerCase();

        const searchMatch = !query
            || job.titulo.toLowerCase().includes(query)
            || job.descripcion.toLowerCase().includes(query)
            || job.empresa.toLowerCase().includes(query)


        const contractMatch = !filters.contract
            || job.data.contract.toLowerCase() === filters.contract.toLowerCase()

        const locationMatch = !filters.location
            || job.data.modalidad.toLowerCase() === filters.location

        const levelMatch = !filters.level
            || job.data.nivel.toLowerCase() === filters.level.toLowerCase()

        return searchMatch
            && locationMatch
            && contractMatch
            && levelMatch
    })


    return (
        <>
            <Search filters={filters} setFilters={setFilters} />
            <Jobs jobs={filteredJobs} />
            <Pagination />
        </>
    )
}
