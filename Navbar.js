import React from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    return(
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">


        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">Shivani@tTech</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink activeclassName="menu_active" className="nav-link"  to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link"  to="/contact">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link"  to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link"  to="/services">Services</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>
        </div>
        </div>

</div>

</div>
    )

}
export default Navbar