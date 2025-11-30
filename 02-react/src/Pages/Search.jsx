import { useEffect, useState } from "react"
import { JobsListing } from "../components/Jobs/JobsListingSection/JobsListing.jsx"
import { SearchForm } from "../components/Jobs/SearchFormSection/SearchForm.jsx"
import { Pagination } from "../components/Jobs/JobsListingSection/Pagination.jsx"

import useSearchForm from "../hooks/useSearchForm.jsx"

export function SearchPage() {

    const {
        currentPage,
        jobs,
        areActivedFilters,
        clearFilters,
        totalJobs,
        isLoading,
        onFilterChange,
        totalPages,
        handePageChange
    } = useSearchForm()

    const title= isLoading? `Cargando... - DevJobs` : `Resultados: ${totalJobs}, Page: ${currentPage} - DevJobs`

    return (
        <main>
            <title>{title}</title>
            <SearchForm onFiltersChange={onFilterChange} handleClearFilter={clearFilters} FiltersActives={areActivedFilters}/>
            {isLoading ? <p>Cargando Empleos</p> : <JobsListing jobs={jobs} />}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handePageChange} />
        </main>
    )
}

