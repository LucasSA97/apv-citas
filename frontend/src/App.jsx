
import { Route, BrowserRouter, Routes } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/Login"
import LostPassword from "./pages/LostPassword"
import Register from "./pages/Register"
import ConfirmPage from "./pages/ConfirmPage"

function App() {


  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={ <AuthLayout/> }>
          <Route index element={ <Login /> }/>
          <Route path="lost-password" element={ <LostPassword /> }/>
          <Route path="register" element={ <Register /> }/>
          <Route path="confirm/:id" index element={ <ConfirmPage /> }/>
        </Route>
       {/* <Route path="/admin" element={ <AdminLayout/> }>
          <Route index element={ <Login /> }/>
          <Route path="lost-password" element={ <LostPassword /> }/>
          <Route path="register" element={ <Register /> }/>
          <Route path="confirm/:id" index element={ <ConfirmPage /> }/>
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
