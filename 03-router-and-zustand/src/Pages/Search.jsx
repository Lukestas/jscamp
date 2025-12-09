import { JobsListing } from "../components/Search/JobsListing/JobsListing.jsx"
import { SearchForm } from "../components/Search/SearchForm/SearchForm.jsx"
import { Pagination } from "../components/Search/Pagination/Pagination.jsx"
import styles from "../PagesStyles/Search.module.css"

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
        handePageChange,
        filters
    } = useSearchForm()

    const title= isLoading? `Cargando... - DevJobs` : `Resultados: ${totalJobs}, Page: ${currentPage} - DevJobs`

    return (
        <main>
            <title>{title}</title>
            <SearchForm DefaultFilters={filters}onFiltersChange={onFilterChange} handleClearFilter={clearFilters} FiltersActives={areActivedFilters}/>
            {isLoading ? <p className={styles.jobsLoading}>Cargando Empleos</p> : <JobsListing jobs={jobs} />}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handePageChange} />
        </main>
    )
}

