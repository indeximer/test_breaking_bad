export const formatDate = (date) => {
    let formatedDate

    if(date && date !== 'Unknown'){
        formatedDate = date.split('-')
        formatedDate = `${formatedDate[1]}/${formatedDate[0]}/${formatedDate[2]}`
    }else{
        formatedDate = 'desconhecida'
    }
    return formatedDate
}

export const translateStatus = (status) => {
    const possibleStatus = {
        Alive: 'vivo',
        Presumeddead: 'morte presumida',
        Deceased: 'Falecido'
    }
    
    if(status){
        const trimmedStatus = status.replace(/\s/g, '');
        const newStatus = possibleStatus[trimmedStatus] || "desconhecido"
        return newStatus
    }    
}