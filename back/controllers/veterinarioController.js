
const registrar =  (req, res) => {
    res.send('Desde API/Veterinario')
}

const perfil = (req, res) => {
    res.send('Desde API/Veterinario/perfil')
}

export {
    registrar,
    perfil
}