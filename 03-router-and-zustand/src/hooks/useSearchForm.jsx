import { useEffect, useRef, useState } from "react";
import { useRouter } from '../hooks/useRouter'
import { useSearchParams } from "react-router";

const RESULTS_PER_PAGE = 3
const InitialFilters = {
    technology: "",
    location: "",
    experience: "",
    contract: "",
    search: ""
}
export default function useSearchForm() {
    const [searchParams, setSearchParams] = useSearchParams()

    const [filters, setFilters] = useState(() => {
        return {
            technology: searchParams.get('technology') || "",
            location: searchParams.get('type') || "",
            experience: searchParams.get('level') || "",
            search: searchParams.get('text') || ""
        }
    })

    const [currentPage, setCurrentPage] = useState(() => {
        const params = new URLSearchParams(window.location.search)
        const page = Number(params.get('page'))
        return Number.isNaN(page) ? page : 1
    })

    const [jobs, setJobs] = useState([])
    const [totalJobs, setTotalJobs] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [areActivedFilters, setAreActivedFilters] = useState(false)

    const timeoutId = useRef(null)

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

    useEffect(() => {
        setSearchParams((params) => {
            if (filters.search) params.set('text', filters.search)
            if (filters.technology) params.set('technology', filters.technology)
            if (filters.location) params.set('type', filters.location)
            if (filters.experience) params.set('level', filters.experience)

            if (currentPage > 1) params.set('page', currentPage)

            return params
        })
    }, [filters, currentPage, setSearchParams])

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

    return { filters, areActivedFilters, clearFilters, isLoading, filtersChage, totalJobs, currentPage, jobs, onFilterChange, totalPages, handePageChange }
}