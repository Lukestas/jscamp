import { useEffect, useState } from "react"
import { JobsListing } from "../components/Jobs/JobsListingSection/JobsListing.jsx"
import { SearchForm } from "../components/Jobs/SearchFormSection/SearchForm.jsx"
import { Pagination } from "../components/Jobs/JobsListingSection/Pagination.jsx"
import jobsData from "../data.json"
import useSearchForm from "../hooks/useSearchForm.jsx"

const RESULTS_PER_PAGE = 3

export function SearchPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const [jobsFiltered, setJobsFiltered] = useState(jobsData)

    const { filtersChage, applyFilters } = useSearchForm()

    useEffect(() => {
        document.title = `Resultados: ${jobsFiltered.length}, Page: ${currentPage} - DevJobs`
    }, [currentPage, jobsFiltered])


    const handePageChange = (page) => {
        setCurrentPage(page)
    }

    const totalPages = Math.ceil(jobsFiltered.length / RESULTS_PER_PAGE)

    const pagedResults = jobsFiltered.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
    )

    const onFilterChange = (name, value) => {
        const newFilter = filtersChage(name, value)
        const filtered = applyFilters(jobsData, newFilter)
        console.log(filtered)
        setJobsFiltered(filtered)
        setCurrentPage(1)
    }


    return (
        <main>
            <SearchForm onFiltersChange={onFilterChange} />
            <JobsListing jobs={pagedResults} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handePageChange} />
        </main>
    )
}

