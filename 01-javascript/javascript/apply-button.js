const jobsListingSection = document.querySelector(".jobs-listing")

if (jobsListingSection !== null) {
    jobsListingSection.addEventListener("click", function (event) {
        const element = event.target

        if (element.classList.contains('button-apply-job')) {
            element.textContent = "Aplicado"
            element.classList.add("is-applied")
            element.disabled = true
        }
        /* if (element.classList.contains('button-job-apply')) {
            window.location.href = './jobOffer.html'
        } */
    })
}