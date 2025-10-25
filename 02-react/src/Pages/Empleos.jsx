import { useState } from "react"
import { Jobs } from "../components/Jobs/Jobs"
import { Search } from "../components/Jobs/Search"
import JobsData from "../data.json"

export function Empleos() {
    const [filters,setFilters]=useState({
        search:"",
        contract:"",
        location:"",
        technology:"",
        level:""
    })

    const handleChange=(newFilters)=>{
        setFilters(newFilters)
        console.log(newFilters)
    }

    return (
        <>
            <Search filters={filet}/>
            <Jobs jobs={JobsData} />
        </>
    )
}
