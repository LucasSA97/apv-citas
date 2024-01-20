import { Outlet } from "react-router-dom"
const PrivateZone = () => {
  return (
    <>
    <h1>
    PrivateZone
    <Outlet></Outlet>
    </h1>
    </>
  )
}

export default PrivateZone