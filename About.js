import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.svg"
import Common from "./Common";
const About=()=>{
    return(
        <div>
            <Common name="Welcome to About page"
            imgsrc={web}
            visit="/Contact"
            btname="Contact Now"/>
        </div>
    )
}
export default About