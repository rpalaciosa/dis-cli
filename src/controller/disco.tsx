import {Disco} from '../models/disco.m';

export async function getDiscos(): Promise<Disco[]> {

    const response = await fetch("http://localhost:3001/disco"); 

    const result = await response.json() ;
    const discos = result.map((disco:any) => ({ 
        id: disco.id,
        year: disco.year,
        nombre: disco.nombre,
        tipo: disco.tipo
    })); 
    return discos ;
}