import { Link } from "react-router-dom";
const AdminNav = () => {
    return (
        <nav className="flex gap-3">
            
            <Link className="font-semibold" to="/admin/perfil">Perfil</Link>
            <Link className="font-semibold" to="/admin/cambiar-password">Cambiar Contraseña</Link>
        </nav>
    )
}

export default AdminNav