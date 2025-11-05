import React from 'react'
import carticon from '../assets/cart_icon.png'
const Navbar = () => {
    const categories = [
        {
            id: 11,
            category: 'Home',
        },
        {
            id: 1,
            category: 'Mens',
        },
        {
            id: 2,
            category: 'Womens',
        },
        {
            id: 3,
            category: 'Kids',
        },
    ]
    return (
        <div className=' cursor-pointer fixed top-0 left-0 w-full flex items-center justify-between py-2 px-10 bg-white'>
            <div className=' w-[30%] flex items-center gap-2'>
                <img src='/assets/logo.png' alt="logo" width={50} />
                <h2 className=' text-2xl font-semibold'>Shopper</h2>
            </div>
            <div className="w-[40%] flex justify-center gap-10">
                {categories.map((cat) => (
                    <a
                        key={cat.id}
                        href={cat.path}
                        className="relative text-gray-700 font-medium 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:w-0 after:h-[2px] after:bg-blue-500 
                 after:transition-all after:duration-300 
                 hover:after:w-full cursor-pointer"
                    >
                        {cat.category}
                    </a>
                ))}
            </div>

            <div className=' w-[30%] flex justify-end gap-12 cursor-pointer'>
                <button className=' px-10 py-1 border rounded-2xl cursor-pointer'>Login</button>
                <div className=' relative'>
                    <img src={carticon} alt="cart" width={40} />
                    <p className=' absolute bottom-7 left-6 bg-red-500 rounded-full px-2 text-white'>0</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar