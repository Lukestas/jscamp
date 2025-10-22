const filters = document.querySelectorAll(".filter")

const filterTechnology = document.querySelector("#filter-technology")
const filterLocation = document.querySelector("#filter-location")
const filterContract = document.querySelector("#filter-contract")
const filterLevel = document.querySelector("#filter-level")

filters.forEach(filter => {
    filter.addEventListener("change", () => {
        const jobs = document.querySelectorAll(".job-listing-card")
        const technology = filterTechnology.value
        const location = filterLocation.value
        const contract = filterContract.value
        const level = filterLevel.value

        jobs.forEach(job => {
            let jobTechnology = job.dataset.technology.split(",");
            console.log(jobTechnology)

            const matchTechnology = !technology || jobTechnology.includes(technology);
            const matchLocation = !location || job.dataset.modalidad === location
            const matchLevel = !level || job.dataset.nivel === level
            const matchContract = !contract || job.dataset.contract === contract

            const isShown = matchTechnology && matchLocation && matchLevel && matchContract

            job.classList.toggle("is-hidden", !isShown)
        })
    })
})