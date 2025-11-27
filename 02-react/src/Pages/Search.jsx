import { useEffect, useState } from "react"
import { JobsListing } from "../components/Jobs/JobsListingSection/JobsListing.jsx"
import { SearchForm } from "../components/Jobs/SearchFormSection/SearchForm.jsx"
import { Pagination } from "../components/Jobs/JobsListingSection/Pagination.jsx"

import useSearchForm from "../hooks/useSearchForm.jsx"

export function SearchPage() {

    const { currentPage, jobsFiltered, onFilterChange, pagedResults, totalPages, handePageChange } = useSearchForm()

    useEffect(() => {
        document.title = `Resultados: ${jobsFiltered.length}, Page: ${currentPage} - DevJobs`
    }, [currentPage, jobsFiltered])


    return (
        <main>
            <SearchForm onFiltersChange={onFilterChange} />
            <JobsListing jobs={pagedResults} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handePageChange} />
        </main>
    )
}

