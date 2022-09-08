import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="dropdown">
                    <button type="button" className="btn dropdown-toggle link-light" 
                        data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li>
                            <Link className="dropdown-item" to="/admin">Home</Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/admin">Manutenção de Locais</Link>
                        </li>
                        <li>
                            <div className="dropend">
                                <button type="button" className="dropdown-item dropdown-toggle" 
                                    data-bs-toggle="dropdown" aria-expanded="false">Manutenção de Patrimônios</button>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li>
                                        <Link className="dropdown-item" to="/admin">Movimentar Patrimônio</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link className="nav-link link-light" to="/admin">SignApp Admin</Link>
                </div>
                <div>
                    &nbsp;
                </div>
            </div>
        </nav>
    )
}