import React from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, recipe, price, _id } = useLoaderData();
    // console.log(item);

    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {

        console.log(data);
        //image upload to imgbb and then get an url
        const imgFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }
            const menures = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menures.data);
            if (menures.data.modifiedCount > 0) {
                // show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated to the menu!!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                // reset();
            }
        }
        console.log(res.data);
    };
    return (
        <div>
            <SectionTitle heading={"Update Items"} subheading={"Refresh info"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-control w-full my-6">
                        <label className='label'>
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" defaultValue={name} className="input input-bordered w-full" placeholder="Reciepe Name" {...register("name", { required: true })} />
                    </div>
                    <div className='flex gap-6'>
                        {/* category and price */}
                        <div className="form-control w-full my-6">
                            <label className='label'>
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} className="select select-bordered w-full" {...register("category", { required: true })}>
                                <option value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full my-6">
                            <label className='label'>
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" defaultValue={price} className="input input-bordered w-full" placeholder="Price" {...register("price", { required: true })} />
                        </div>
                        {/* receipe details */}

                    </div>
                    <div className="form-control">
                        <label className='label'>
                            <span className="label-text">Receipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe} className="textarea h-24 input textarea-bordered w-full" placeholder="Bio" {...register("recipe")}></textarea>
                    </div>
                    <div className='form-control w-full my-6'>
                        <input type="file" className="file-input" {...register("image", { required: true })} />
                    </div>
                    <button className='btn'>Update Menu Item </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;