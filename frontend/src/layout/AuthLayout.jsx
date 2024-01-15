import { Outlet } from "react-router-dom"
const AuthLayout = () => {
  return (
    <>
        <main className="container items-center mx-auto md:grid md:grid-cols-2 mt-11 gap-10 p-5">
            <Outlet/>
        </main>

    </>
  )
}

export default AuthLayout