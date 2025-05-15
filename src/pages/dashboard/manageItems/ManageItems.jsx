import React from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useMenu from '../../../hooks/useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const hanldeDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data);
                // refetch to update the ui
                refetch();
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted!!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }

    return (
        <div>
            <SectionTitle heading="Manage Items" subheading={"Hurry Up"}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) => <tr>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>$ {item.price}</td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <td>
                                            <button className="btn bg-orange-500 btn-lg">
                                                <FaEdit className='text-white text-2xl'></FaEdit>
                                            </button>
                                        </td>
                                    </Link>

                                    <td>
                                        <button onClick={() => hanldeDeleteItem(item)} className="btn btn-ghost btn-sm"><FaTrashAlt className='text-red-600'></FaTrashAlt></button>

                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;