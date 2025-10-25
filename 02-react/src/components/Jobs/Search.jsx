import { Filters } from "./Filters"
import { SearchBar } from "./SearchBar"
export function Search({filters, setFilters}) {

    return (
        <section className="jobs-search">
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico</p>
            <form id="empleos-search-form" role="search">
                <SearchBar filters={filters} setFilters={setFilters}/>
                <Filters filters={filters} setFilters={setFilters}/>
            </form>
        </section>
    )
}