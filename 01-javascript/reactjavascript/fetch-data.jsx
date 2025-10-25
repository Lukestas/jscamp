export function CreateArticle(){
    const jobs=fetch("../data.json").then(response=>response.json())
    console.log(jobs)
    return(
        <article className="job-listing-card">
            <h3>{}</h3>
            <small>{} | {}</small>
            <p>{}</p>
        </article>
    )
}