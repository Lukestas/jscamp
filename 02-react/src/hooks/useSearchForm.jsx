import { useState } from "react";
import jobsData from "../data.json"

const RESULTS_PER_PAGE = 5

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

    const applyFilters = (newFilters) => jobsData.filter(job => {

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

    const [currentPage, setCurrentPage] = useState(1)
    const [jobsFiltered, setJobsFiltered] = useState(jobsData)

    const handePageChange = (page) => {
        setCurrentPage(page)
    }

    const totalPages = Math.ceil(jobsFiltered.length / RESULTS_PER_PAGE)

    const pagedResults = jobsFiltered.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
    )

    const onFilterChange = (name, value) => {
        const newFilter = filtersChage(name, value)
        const filtered = applyFilters(newFilter)
        setJobsFiltered(filtered)
        setCurrentPage(1)
    }


    return { filtersChage, applyFilters, currentPage, jobsFiltered, onFilterChange, pagedResults, totalPages, handePageChange }
}