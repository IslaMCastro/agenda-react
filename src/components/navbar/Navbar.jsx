import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Informações</a>
                <button className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" 
                            aria-current="page" href="#">Contatos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Eventos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Reuniões</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" 
                            aria-disabled="true">OBS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar