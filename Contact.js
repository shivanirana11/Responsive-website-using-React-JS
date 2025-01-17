import React, { useState } from "react";
const Contact=()=>{
    const [data, setdata]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    
    })

    const InputEvent=(e)=>{
        const {name, value} = e.target;
        setdata((prev)=>{
            return{
                ...prev, [name]:value,
            }
        })
    }
    const formSubmit=(evt)=>{
        evt.preventDefault();
        alert(`${data.fullname}`)
    }
    return(
        <>
        <div className="my-3">
            <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your Name"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter mobile number"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent}  rows="3"></textarea>
                        </div>
                        <div class="col-12">
                        <button class="btn btn-primary" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact
