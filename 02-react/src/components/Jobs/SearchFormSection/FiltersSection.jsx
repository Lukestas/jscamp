import { Filter } from "./Filter"
import { filtersList } from "./jobsFilters"

export const FiltersSection = ({ onChange }) => {

    const filtersData = filtersList.map(filter => (
        <Filter
            key={filter.field}
            filter={filter}
            onChange={onChange}
        />
    ))

    return (
        <div className="search-filters">
            {filtersData}
        </div>
    )
}   