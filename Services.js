import React from "react";
import CommonCard from "./CommonCard";
import Sdata from "./Sdata";


const Services=()=>{
    return(
        <>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-3">
                                {Sdata.map((val, idx)=>{
                                return <CommonCard key={idx}
                                imgsrc={val.imgsrc}
                                title={val.title}/>
                            })}

                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Services