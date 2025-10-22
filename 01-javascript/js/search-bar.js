const searchBar = document.querySelector("#empleos-search-input")

searchBar.addEventListener("input", () => {
    const jobs = document.querySelectorAll(".job-listing-card")
    const searchBarValue = searchBar.value.toLowerCase()
    
    jobs.forEach((job) => {
        const title = job.querySelector("h3").textContent.toLowerCase();
        const description = job.querySelector("p").textContent.toLowerCase();
        const company = job.dataset.company.toLowerCase()

        const isShown = "" || title.includes(searchBarValue) || description.includes(searchBarValue) || company.includes(searchBarValue)


        job.classList.toggle("is-hidden", !isShown)
    })

})