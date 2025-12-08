import { Filter } from "./Filter"
import { filtersList } from "./jobsFilters"
import style from "./FilterSection.module.css"

export const FiltersSection = ({DefaultFiltersValue ,onChange }) => {

    const filtersData = filtersList.map(filter => (
        <Filter
            key={filter.field}
            filter={filter}
            onChange={onChange}
            DefaultFilterValue={DefaultFiltersValue?.[filter.field]}
        />
    ))

    return (
        <div className={style.filtersSection}>
            {filtersData}
        </div>
    )
}   