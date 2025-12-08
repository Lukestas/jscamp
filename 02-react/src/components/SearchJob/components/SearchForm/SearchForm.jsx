import { FiltersSection } from "./FiltersSection.js"
import { SearchBar } from "./SearchBar.js"
import styles from "./SearchForm.module.css"

export function SearchForm({ onFiltersChange, handleClearFilter, FiltersActives }) {

    return (
        <section className={styles.jobsSearch}>
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico</p>
            <form id="empleos-search-form" role="search">
                <SearchBar onChange={onFiltersChange} />
                <FiltersSection onChange={onFiltersChange} />
                {FiltersActives ? <button className={styles.clearFilters} onClick={handleClearFilter}>Limpiar Filtros</button>:""}
            </form>
        </section>
    )
}