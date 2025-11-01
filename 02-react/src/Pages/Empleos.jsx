import { useState } from "react"
import { JobsListing } from "../components/Jobs/JobsListingSection/JobsListing.jsx"
import { SearchForm } from "../components/Jobs/SearchFormSection/SearchForm.jsx"
import { Pagination } from "../components/Jobs/JobsListingSection/Pagination.jsx"
import jobsData from "../data.json"

const RESULTS_PER_PAGE = 5

export function Empleos() {
    const [currentPage, setCurrentPage] = useState(1)
    const [jobsFiltered, setJobsFiltered] = useState(jobsData)

    const handePageChange = (page) => {
        setCurrentPage(page)
    }

    const totalPages = Math.ceil(jobsFiltered.length / RESULTS_PER_PAGE)

    const pagedResults = jobsFiltered.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
    )

    const handlefiltersChange = (newFilters) => {
        const filterJobs = jobsData.filter(job => {

            const matchTechnology = !newFilters.technology
                || (Array.isArray(job.data.technology)
                    ? job.data.technology.includes(newFilters.technology)
                    : job.data.technology === newFilters.technology)

            const matchLocation = !newFilters.location || job.data.location === newFilters.location

            const matchExperience = !newFilters.experience || job.data.level === newFilters.experience

            const matchContract = !newFilters.contract || job.data.contract === newFilters.contract

            const matchSearch = !newFilters.search || job.descripcion.toLowerCase().includes(newFilters.search) || job.empresa.toLowerCase().includes(newFilters.search) || job.titulo.toLowerCase().includes(newFilters.search)

            return matchTechnology && matchLocation && matchExperience && matchContract && matchSearch
        })
        console.log(filterJobs)
        setJobsFiltered(filterJobs)
        setCurrentPage(1)
    }



    return (
        <>
            <SearchForm onFiltersChange={handlefiltersChange} />
            <JobsListing jobs={pagedResults} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handePageChange} />
        </>
    )
}

