import '../css/componetes.css';

export const saludar = (nombre) => {
    const h1 = document.createElement('h1');
    h1.innerHTML = `hola mundo ${nombre}`;
    document.body.append(h1);
}