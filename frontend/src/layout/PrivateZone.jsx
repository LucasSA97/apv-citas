import { Outlet, Navigate } from "react-router-dom"
import useAuth from '../hooks/useAuth'
import Footer from "../components/Footer"
import Header from "../components/Header"
const PrivateZone = () => {

    const { auth, cargando } = useAuth() 

    if( cargando ) return 'cargando...'
  return (
    <>
        <Header/>

         { auth?._id ? <Outlet/> : <Navigate to="/"/>}

        <Footer/>
    </>
  )
}

export default PrivateZone