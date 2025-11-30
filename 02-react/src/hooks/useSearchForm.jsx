import { useEffect, useRef, useState } from "react";

const RESULTS_PER_PAGE = 3
const InitialFilters = {
    technology: "",
    location: "",
    experience: "",
    contract: "",
    search: ""
}
export default function useSearchForm() {
    const [filters, setFilters] = useState(InitialFilters)
    const [jobs, setJobs] = useState([])
    const [totalJobs, setTotalJobs] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [areActivedFilters, setAreActivedFilters] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const timeoutId=useRef(null)

    useEffect(() => {
        async function fetchJobs() {
            try {
                setIsLoading(true)

                const params = new URLSearchParams()
                if (filters.search) params.append('text', filters.search)
                if (filters.technology) params.append('technology', filters.technology)
                if (filters.location) params.append('type', filters.location)
                if (filters.experience) params.append('level', filters.experience)

                const offset = (currentPage - 1) * RESULTS_PER_PAGE
                params.append("limit", RESULTS_PER_PAGE)
                params.append("offset", offset)

                const queryParams = params.toString()

                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
                const responseToJSON = await response.json()
                setJobs(responseToJSON.data)
                setTotalJobs(responseToJSON.total)
            } catch (error) {
                console.error("error fetching jobs: ", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchJobs()
    }, [filters, currentPage])

    const clearFilters = () => {
        setFilters(InitialFilters)
        setAreActivedFilters(false)
        setCurrentPage(1)
    }

    const filtersChage = (name, value) => {
        const newFilters = { ...filters, [name]: value }
        if (name == "search") {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current)
            }

            timeoutId.current = setTimeout(() => {
                setFilters(newFilters)
                setAreActivedFilters(true)
            }, 500)
            return
        }
        setFilters(newFilters)
        setAreActivedFilters(true)
    }

    const handePageChange = (page) => {
        setCurrentPage(page)
    }

    const totalPages = Math.ceil(totalJobs / RESULTS_PER_PAGE)

    const onFilterChange = (name, value) => {
        filtersChage(name, value)
        setCurrentPage(1)
    }

    return { areActivedFilters, clearFilters, isLoading, filtersChage, totalJobs, currentPage, jobs, onFilterChange, totalPages, handePageChange }
}