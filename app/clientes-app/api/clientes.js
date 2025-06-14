//Funciones para consumir las APIs de clientes
import { API_BASE_URL } from './config';

export async function getClientes() {
    try{
      const url = `${API_BASE_URL}/Clientes`;
        const response = await fetch(url);  
    
     console.log('URL de la API:', url); // <-- Así sí imprime la URL      
    //Verifica si la respuesta es correcta  
    console.log('Estado de la respuesta:', response.ok); //Log para verificar el estado de la respuesta
    console.log('Estado de la respuesta:', response.status); //Log para verificar el estado de la respuesta 
    console.log('Encabezados de la respuesta:', response.headers); //Log para verificar los encabezados de la respuesta  

    if (!response.ok) {
        throw new Error('Error al obtener los clientess: ');
    }
    return response.json(); //Devuelve el listado de los clientes
} catch (error) {
    console.error('CATCH Error al obtener los clientes:', error);
    throw error; //Re-lanza el error para que pueda ser manejado por el llamador    
} 
}


export async function getClienteById(id) {
    const response = await fetch(`${API_BASE_URL}/clientes/${id}`);
    if (!response.ok) {
        throw new Error('Error al obtener el cliente');
    }
    return response.json(); //Devuelve el cliente por ID
    
}
