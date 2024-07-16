import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import useSignup from '../../Hooks/useSignup';
import toast from 'react-hot-toast';
import './Register.css'

const Register = () => {
    const { signup } = useSignup();
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false)


    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        pin: 0,
        role: 'user'
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        const pin = e.target.pin.value
        if (pin.length < 5 || pin.length > 5) {
            toast.error("Pin Must be 5 Digit")
        } else if (!isChecked) {
            toast.error("Please Accept The Terms and Conditions")

        } else {
            await signup(formData);
        }
        setIsLoading(false)
    }



    return (
        <div className='background'>
            <div className='lg:flex justify-center items-center h-screen ' >
                <div className="">
                    <div className="">
                        <div className="card w-full lg:shadow-2xl ">
                            <img className='w-24 mx-auto mt-4' src={logo} alt="" />
                            <h1 className="text-center lg:text-5xl text-3xl font-bold ">Register</h1>
                            <form className="card-body lg:grid lg:grid-cols-2" onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Enter full name" className="input input-bordered" required onChange={handleChange} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Pin</span>
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2 label">
                                        <input name="pin" type='number' className="grow" placeholder="Enter 5 Digit Pin Number" onChange={handleChange} />
                                    </label>
                                </div>
                             
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input name="phone" type="text" placeholder="01XXXXXXXXX" className="input input-bordered" required onChange={handleChange} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required onChange={handleChange} />
                                </div>
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <p className="pt-2 text-sm">Already have an account? <span className="text-white"><Link to='/login'>Login</Link></span></p>
                                    </label>
                                    
                                </div>
                                <div className="form-control mt-6 col-span-2">
                                    <button type="submit" className="btn bg-[#363062] border-none text-white">Register {isLoading && <span className="loading loading-spinner loading-md"></span>}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
