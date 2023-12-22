
const registrar =  (req, res) => {
    res.json({ msg: 'Registrando... ' })
}

const perfil = (req, res) => {
    res.json({ msg: 'Mostrando perfil'})
}

export {
    registrar, 
    perfil,
}