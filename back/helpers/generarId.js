const generarId = () => {
    //Manera para generar un id unico o casi unico
    return Date.now().toString(32) + Math.random().toString(32).substring(2)
}

export default generarId;