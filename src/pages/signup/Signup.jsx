import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLOgin from '../../components/sociallogin/SocialLOgin';


const Signup = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User Profile Info Updated');
                        //create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('User Added to the Database!!')
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Created Successfully!!",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');

                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name?.type === "required" && (
                                <span className="text-red-600">Password is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input placeholder="PhotoURL" className="input input-bordered" {...register("photoURL", { required: true })} />
                            {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                            {errors.email?.type === "required" && (
                                <span className="text-red-600">Email is required</span>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/ })} name="password" placeholder="Password" className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <span className="text-red-600">Password is required</span>
                            )}
                            {errors.password?.type === "minLength" && (
                                <span className="text-red-600">Password must be at least 6 characters</span>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <span className="text-red-600">Password must not exceed 20 characters</span>
                            )}
                            {errors.password?.type === "pattern" && (
                                <span className="text-red-600">Password must include one uppercase letter, one lowercase letter, and one special character</span>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="SignUp" className="btn btn-primary" />
                        </div>
                    </form>
                    <SocialLOgin></SocialLOgin>
                    <p><small>ALready have an account?<Link to="/login">Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;