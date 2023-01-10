type Categoria = '' |'ahorro' | 'comida' | 'casa' | 'gastos' | 'ocio' | 'salud' | 'suscripciones';
export interface IGasto {
    id?:string,
    name:string,
    cantidad:number,
    categoria:Categoria,
    date: Date
}
