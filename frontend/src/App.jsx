
import { Route, BrowserRouter, Routes } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/Login"
import LostPassword from "./pages/LostPassword"
import Register from "./pages/Register"
import ConfirmPage from "./pages/ConfirmPage"
import NewPassword from "./pages/newPassword"
import { AuthProvider } from "./context/AuthProvider"
import PrivateZone from "./layout/PrivateZone"
import AdministrarPacientes from "./pages/AdministrarPacientes"

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

        <Route path="/" element={ <AuthLayout/> }>
          <Route index element={ <Login /> }/>
          <Route path="register" element={ <Register /> }/>
          <Route path="lost-password" element={ <LostPassword /> }/>
          <Route path="lost-password/:token" element={ <NewPassword /> }/>
          <Route path="confirm/:token" index element={ <ConfirmPage /> }/>
        </Route>
        <Route path="/admin" element={<PrivateZone/>}>
          <Route index element={<AdministrarPacientes/>}/>
        </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
