export const technologies = [
    {key:"react",name:"React"},
    {key:"node",name:"Node"},
    {key:"javascript",name:"Javascript"},
    {key:"python",name:"Python"},
    {key:"mobile",name:"Mobile"}
]
export const locations = [
    {key:"remoto",name:"Remoto"},
    {key:"cdmx",name:"Ciudad de méxico"},
    {key:"guadalajara",name:"Guadalajara"},
    {key:"barcelona",name:"Barcelona"},
    {key:"bsas",name:"Buenos Aires"},
    {key:"madrid",name:"Madrid"},
    {key:"valencia",name:"Valencia"},
    {key:"bogota",name:"Bogotá"},
    {key:"lima",name:"Lima"},
    {key:"santiago",name:"Santiago"},
    {key:"monterrey",name:"Monterrey"}
]
export const experienceLevels = [
    {key:"trainee",name:"Trainee"},
    {key:"junior",name:"Junior"},
    {key:"mid",name:"Mid level"},
    {key:"senior",name:"Senior"},
    {key:"lead",name:"Lead"},
]
export const contractTypes = [
    {key:"part",name:"Parcial"},
    {key:"rotating ",name:"Rotativa"},
    {key:"full",name:"Completa"},
    {key:"temporary",name:"Temporal"},
]

export const filtersList=[
    {field:"technology",label:"Tecnología",options:technologies},
    {field:"location",label:"Ubicación",options:locations},
    {field:"experience",label:"Nivel de Experiencia",options:experienceLevels},
    {field:"contract",label:"Tipo de contrato",options:contractTypes}
]