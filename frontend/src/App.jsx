
import { Route, BrowserRouter, Routes } from "react-router-dom"

import AuthLayout from "./layout/AuthLayout"
import PrivateZone from "./layout/PrivateZone"

import Login from "./pages/Login"
import LostPassword from "./pages/LostPassword"
import Register from "./pages/Register"
import ConfirmPage from "./pages/ConfirmPage"
import EditarPerfil from "./pages/EditarPerfil"
import CambiarPassword from "./pages/CambiarPassword"

import { AuthProvider } from "./context/AuthProvider"
import { PacientesProvider } from "./context/PacientesProvider"

import AdministrarPacientes from "./pages/AdministrarPacientes"
import NewPassword from "./pages/newPassword"

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
        <Routes>

        <Route path="/" element={ <AuthLayout/> }>
          <Route index element={ <Login /> }/>
          <Route path="register" element={ <Register /> }/>
          <Route path="lost-password" element={ <LostPassword /> }/>
          <Route path="lost-password/:token" element={ <NewPassword /> }/>
          <Route path="confirm/:token" index element={ <ConfirmPage /> }/>
        </Route>
        
        <Route path="/admin/*" element={<PrivateZone/>}>
          <Route index element={<AdministrarPacientes/>}/>
          <Route path="perfil" element={<EditarPerfil/>}/>
          <Route path="cambiar-password" element={<CambiarPassword/>}/>
        </Route>

        </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
