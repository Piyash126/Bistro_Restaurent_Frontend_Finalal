import React from 'react';
import SectionTitle from '../../../shared/sectionTitle/SectionTitle';
import featutedImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 bg-fixed'>
            <SectionTitle heading={"Feature Item"} subheading={"Check it Out"}></SectionTitle>
            <div className='md:flex justify-center items-center h-screen py-8 px-16 gap-6 bg-slate-500 bg-opacity-40'>
                <div className='mr-4'>
                    <img src={featutedImg} alt="" />
                </div>
                <div>
                    <p>Aug20, 2029</p>
                    <p className='uppercase'>Whwere can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas cum debitis asperiores fuga iure blanditiis eum at dignissimos reiciendis.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;