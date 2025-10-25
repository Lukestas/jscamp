export const SearchForm = () => {
    return (
        <form id="empleos-search-form" role="search">
            <div className="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
                <input name="search" id="empleos-search-input" required type="text"
                    placeholder="Busca trabajos, empresas o habilidades" />
            </div>


            <div className="search-filters">
                <select className="filter" name="technology" id="filter-technology">
                    <option value="">Tecnología</option>
                    <hr />
                    <optgroup label="Web">
                        <option value="javascript">JavaScript</option>
                        <option value="react">React</option>
                        <option value="node">NodeJs</option>
                    </optgroup>
                    <hr />
                    <option value="python">Python</option>
                    <option value="csharp">C#</option>
                    <option value="java">Java</option>
                    <option value="mobile">Mobile</option>
                </select>
                <select className="filter" name="location" id="filter-location">
                    <option value="">Ubicación</option>
                    <hr />
                    <optgroup label="Mexico">
                        <option value="cdmx">Ciudad de México</option>
                        <option value="guadalajara">Guadalajara</option>
                        <option value="monterrey">Monterrey</option>
                    </optgroup>
                    <hr />
                    <option value="barcelona">Barcelona</option>
                    <option value="cr">Costa Rica</option>
                    <option value="lima">Lima</option>
                    <hr />
                    <option value="remoto">Remoto</option>
                </select>
                <select className="filter" name="contract" id="filter-contract">
                    <option value="">Tipo de contrato</option>
                    <hr />
                    <option value="full">Tiempo Completo</option>
                    <option value="temporary">Temporal</option>
                    <option value="part">Medio Tiempo</option>
                </select>
                <select className="filter" name="level" id="filter-level">
                    <option value="">Nivel de experiencia</option>
                    <hr />
                    <option value="junior">Junior</option>
                    <option value="mid-level">Mid-level</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead</option>
                </select>
            </div>
        </form>
    )
}