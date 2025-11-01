export function Filter({ filter, onChange }) {

    const optionsList = filter.options.map(option => (
        <option key={option.key} value={option.key}>
            {option.name}
        </option>
    ))

    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        onChange(name,value)
    }

    return (
        <select name={filter.field} onChange={handleChange}>
            <option value="">{filter.label}</option>
            {optionsList}
        </select>
    );
}