import { useState } from 'react'
import { FiltersSection } from "./FiltersSection.jsx"
import { SearchBar } from "./SearchBar.jsx"

export function SearchForm({ onFiltersChange }) {
    const [filters, setFilters] = useState({
        technology: "",
        location: "",
        experience: "",
        contract: "",
        search: ""
    })

    const onChange = (name, value) => {
        const newFilters = { ...filters, [name]: value }
        setFilters(newFilters)
        onFiltersChange(newFilters)
    }

    return (
        <section className="jobs-search">
            <h1>Encuentra tu próximo trabajo</h1>
            <p>Explora miles de oportunidades en el sector tecnológico</p>
            <form id="empleos-search-form" role="search">
                <SearchBar onChange={onChange} />
                <FiltersSection onChange={onChange} />
            </form>
        </section>
    )
}