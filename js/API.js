const url = 'http://localhost:4000/clientes';

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