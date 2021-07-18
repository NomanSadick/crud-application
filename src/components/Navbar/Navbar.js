import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light container">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/list">List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/create">Create</Link>
                    </li>
                  
                  
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;