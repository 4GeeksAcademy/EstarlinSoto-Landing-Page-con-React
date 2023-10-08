import React from "react";

const NavBar = () =>{

    return(
        <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid bar p-3 px-4">
                <a className="navbar-brand text-light fs-3 mx-3" href="#"><strong>Start Bootstrap</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-light fs-5" aria-current="page" href="#"><strong>Home</strong></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-secondary fs-5" href="#"><strong>About</strong></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-secondary fs-5" aria-current="page" href="#"><strong>Services</strong></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-secondary fs-5" aria-current="page" href="#"><strong>Contact</strong></a>
                    </li>
                
                </ul>
                </div>
            </div>
</nav>

        );
};

export default NavBar;