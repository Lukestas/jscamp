const container = document.querySelector(".jobs-listing")

fetch("./data.json")
    .then(respose => {
        return respose.json()
    })
    .then((jobs) => {
        jobs.forEach(job => {
            const article = document.createElement('article')
            article.className = "job-listing-card"
            article.dataset.modalidad = job.data.modalidad
            article.dataset.nivel = job.data.nivel
            article.dataset.technology = job.data.technology
            article.dataset.contract= job.data.contract
            article.dataset.company= job.empresa
            article.innerHTML = `<div>
            <h3>${job.titulo}</h3>
            <small>${job.empresa} | ${job.ubicacion}</small>
            <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`
            container.appendChild(article)
        })
    })