import { useState } from "react";

export default function useSearchForm() {
    const [filters, setFilters] = useState({
        technology: "",
        location: "",
        experience: "",
        contract: "",
        search: ""
    })

    const filtersChage = (name, value) => {
        const newFilters = { ...filters, [name]: value }
        setFilters(newFilters)
        return newFilters
    }

    const applyFilters = (jobs, newFilters) => jobs.filter(job => {

        const matchTechnology = !newFilters.technology
            || (Array.isArray(job.data.technology)
                ? job.data.technology.includes(newFilters.technology)
                : job.data.technology === newFilters.technology)

        const matchLocation = !newFilters.location || job.data.location === newFilters.location

        const matchExperience = !newFilters.experience || job.data.level === newFilters.experience

        const matchContract = !newFilters.contract || job.data.contract === newFilters.contract

        const matchSearch = !newFilters.search || job.descripcion.toLowerCase().includes(newFilters.search) || job.empresa.toLowerCase().includes(newFilters.search) || job.titulo.toLowerCase().includes(newFilters.search)

        return matchTechnology && matchLocation && matchExperience && matchContract && matchSearch
    })


    return { filtersChage, applyFilters }
}