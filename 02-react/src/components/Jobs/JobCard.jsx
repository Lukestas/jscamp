export function JobCard({ job }) {
    const {
        data,
        titulo,
        empresa,
        ubicacion,
        descripcion
    } = job
    return (
        <article
            className="job-listing-card"
            data-modalidad={data.modalidad}
            data-nivel={data.nivel}
            data-contract={data.contract}
            data-technology={data.technology}
        >
            <div>
                <h3>{titulo}</h3>
                <small>{empresa} | {ubicacion}</small>
                <p>{descripcion}</p>
            </div>
            <button className="button-apply-job">Aplicar</button>
        </article>
    )
}