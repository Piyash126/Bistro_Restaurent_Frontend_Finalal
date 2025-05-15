import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const { name, image, price, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddtoCart = (food) => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }


            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added to the Cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "PLease Login to the add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
        console.log('Food is', food, user.email);
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='absolute right-4 top-4 p-4 bg-slate-900 text-white rounded-md'>$ {price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>

                <p>{recipe}</p>
                <div className="card-actions justify-end">

                    <button onClick={() => handleAddtoCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 border-orange-200">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;