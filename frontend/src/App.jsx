
import { Route, BrowserRouter, Routes } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/Login"
import LostPassword from "./pages/LostPassword"
import Register from "./pages/Register"
import ConfirmPage from "./pages/ConfirmPage"
import NewPassword from "./pages/newPassword"
import { AuthProvider } from "./context/AuthProvider"

function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

        <Route path="/" element={ <AuthLayout/> }>
          <Route index element={ <Login /> }/>
          <Route path="lost-password" element={ <LostPassword /> }/>
          <Route path="lost-password/:token" element={ <NewPassword /> }/>
          <Route path="register" element={ <Register /> }/>
          <Route path="confirm/:token" index element={ <ConfirmPage /> }/>
        </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
