import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLOgin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='p8'>
                <button className='btn ml-4' onClick={handleGoogleSignIn}>
                    <FaGoogle className='mr-4'></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLOgin;