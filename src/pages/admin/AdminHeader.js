import { Outlet } from 'react-router-dom'
import Menu from '../../compoments/Menu'

export default function AdminHeader() {
    return (
        <div>
            <Menu />
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}