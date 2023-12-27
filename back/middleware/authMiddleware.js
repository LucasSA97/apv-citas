const checkAuth = (req, res, next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('Tiene el token con bearer')
    } 
    const error = new Error('Token no valido')
    res.status(403).json({ msg: error.message })
    next()
}

export default checkAuth;