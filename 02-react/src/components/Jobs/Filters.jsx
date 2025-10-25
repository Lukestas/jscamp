export const Filters = ({ filters, setFilters }) => {

    const handleChange = (e) => {
        const { name, value } = e.target
        setFilters({ ...filters, [name]: value })
    }

    return (
        <div className="search-filters">
            <select
                className="filter"
                name="technology"
                id="filter-technology"
                onChange={handleChange}
                value={filters.technology}
            >
                <option value="">Tecnología</option>
                <option value="javascript">JavaScript</option>
                <option value="react">React</option>
                <option value="node">NodeJs</option>
                <option value="python">Python</option>
                <option value="csharp">C#</option>
                <option value="java">Java</option>
                <option value="mobile">Mobile</option>
            </select>
            <select
                className="filter"
                name="location"
                id="filter-location"
                onChange={handleChange}
                value={filters.location}
            >
                <option value="">Ubicación</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="monterrey">Monterrey</option>
                <option value="barcelona">Barcelona</option>
                <option value="cr">Costa Rica</option>
                <option value="lima">Lima</option>
                <option value="remoto">Remoto</option>
            </select>
            <select
                className="filter"
                name="contract"
                id="filter-contract"
                onChange={handleChange}
                value={filters.contract}
            >
                <option value="">Tipo de contrato</option>
                <option value="full">Tiempo Completo</option>
                <option value="temporary">Temporal</option>
                <option value="part">Medio Tiempo</option>
            </select>
            <select
                className="filter"
                name="level"
                id="filter-level"
                onChange={handleChange}
                value={filters.level}
            >
                <option value="">Nivel de experiencia</option>
                <option value="junior">Junior</option>
                <option value="mid-level">Mid-level</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
            </select>
        </div>
    )
}   