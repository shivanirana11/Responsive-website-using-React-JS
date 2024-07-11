import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.svg"

const Common=(props)=>{
    return(
        <>
        <section id="header" className="d-flex">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row align-items-center">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>{props.name}<strong className="brand-name">Shivani@tTech</strong></h1>
                            <h2>We are team of talented developers  making websites</h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-primary">{props.btname}</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt=""></img>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Common