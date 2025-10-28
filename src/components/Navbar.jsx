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
        <div className=' flex items-center justify-between py-2 px-10 bg-amber-100 '>
            <div className=' w-[30%] flex items-center gap-2'>
                <img src='/assets/logo.png' alt="logo" width={50} />
                <h2 className=' text-2xl font-semibold'>Shopper</h2>
            </div>
            <div className=' w-[40%] flex justify-center gap-25'>
                {categories.map((cat) => (
                    <a key={cat.id} href={cat.path}>
                        {cat.category}
                    </a>
                ))}
            </div>
            <div className=' w-[30%] flex justify-end gap-12'>
                <button className=' px-10 py-1 border rounded-2xl'>Login</button>
                <div className=' relative'>
                    <img src={carticon} alt="cart" width={40}/>
                    <p className=' absolute bottom-7 left-6 bg-red-500 rounded-full px-2 text-white'>0</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar