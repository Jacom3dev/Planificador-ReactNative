export const formatearCantidad = (cantidad:number)=>{
    return cantidad.toLocaleString('en-US',{
        style:'currency',
        currency:'USD'
    })
}

export const formatearFecha = (date:Date) => {
    const newDate = date;
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return newDate.toLocaleDateString('es-Es',options);
}