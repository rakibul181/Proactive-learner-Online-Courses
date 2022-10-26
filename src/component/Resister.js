import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Resister = () => {
    const{userSignInwithProvider}= useContext(AuthContext)
    const [error, setError] = useState(undefined)

    const googleProvider = new GoogleAuthProvider()

    const hendelGoogleSignIn = ()=>{
        userSignInwithProvider(googleProvider)
        .then(result =>{
            const user = result.user
            setError('')
            console.log(user);
        })
        .catch(e=>{
            setError(e.message)
            console.error(e);
        })
    }

    return (
        <div>
             <div className="hero min-h-screen ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login To Proactive Learner!!!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>

                                {
                                    error ? <span className="label-text text-red-500">{error}</span> : ''
                                }

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-secondary">Login</button>
                            </div>
                            <label className="label">
                                <span className='label-text'>Have Not Account? <Link to="../resister" className="label-text-alt link link-hover"> Resister</Link></span>

                            </label>
                            <div className='mt-6 '>
                                <button onClick={hendelGoogleSignIn} className="btn w-full btn-outline btn-light" type="submit"><FcGoogle className='mx-2 text-2xl'></FcGoogle> Login With Google</button>
                            </div>
                            <div className='mt-6 '>
                                <button className="btn w-full btn-outline btn-light" type="submit"><FaGithub className='mx-2 text-2xl'></FaGithub> Login With Github</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Resister;