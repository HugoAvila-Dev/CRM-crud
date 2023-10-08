const url = 'http://localhost:4000/clientes';

//Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ), //Se envia de dos formas, como string o como objeto
            headers: { //Informacion de que tipo de datos estamos enviando
                'Content-Type': 'application/json' //si estas subiendo archivo se utiliza multipart/form-data
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

//Obtiene todos los clientes
export const obtenerClientes = async() => {
    try {
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Elimina un cliente 
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//Obtiene un cliente por su ID
export const obtenerCliente = async id => {
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const cliente = await respuesta.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}