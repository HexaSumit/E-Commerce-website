import React from 'react'
import mens_banner from '../assets/banner_mens.png'
import dropdown from '../assets/dropdown_icon.png'
import allProducts from '../data/allProducts'
import Card from '../components/Card'
import logo from '../../public/assets/logo.png'
const Mens = () => {
    return (
        <div className=' mt-15 p-10'>
            {/* BANNER */}
            <div className=''>
                <img src={mens_banner} alt="banner_mens" />
            </div>
            {/* SORT BY BUTTON */}
            <div className=' flex items-center justify-between py-4'>
                <p className=' text-md'><span className=' font-semibold'>Showing 1-12</span> out of 54 products</p>
                <button className="flex items-center gap-2 border px-3 py-1 rounded-4xl">
                    Sort by
                    <img src={dropdown} alt="dropdown" className="w-3 h-2" />
                </button>
            </div>
            {/* LIST OF PRODUCTS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-3">
                {allProducts
                    .filter((item) => item.category === "men")
                    .map((item) => (
                        <Card
                            key={item.id}
                            img={item.image}
                            name={item.name}
                            newPrice={item.new_price}
                            oldPrice={item.old_price}
                        />
                    ))}
            </div>
            
            <div className="flex justify-center pt-4">
                <button className="p-3 rounded-3xl text-md bg-gray-200 hover:bg-gray-300 transition-all duration-300">
                    Explore More
                </button>
            </div>

            <div className=' flex items-center justify-center pt-15'>
                <img src={logo} alt="logo" width={80} />
                <h2 className='text-4xl font-semibold'>SHOPPER</h2>
            </div>
        </div>
    )
}

export default Mens