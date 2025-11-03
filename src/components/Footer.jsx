import React from 'react'
import logo from '../../public/assets/logo.png'
import iglogo from '../assets/instagram_icon.png'
import walogo from '../assets/whatsapp_icon.png'
const Footer = () => {
    const footerlinks = [
        {
            id: 1,
            name: 'Company',
        },
        {
            id: 2,
            name: 'Products',
        },
        {
            id: 3,
            name: 'Offices',
        },
        {
            id: 4,
            name: 'About',
        },
        {
            id: 5,
            name: 'Contact',
        }
    ]
    return (
        <div className=' flex flex-col gap-5 items-center justify-center px-20 py-5  bg-gradient-to-b from-pink-100 to-white'>
            {/* left */}
            <div className=' pt-10'>
                <h3 className=' text-4xl font-semibold '>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h3>
            </div>
            <p className=' text-large text-shadow-md'>Subscribe to our latest news reports and articles!</p>
            <div className="w-full flex justify-center">
                <div className="relative w-[500px]">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-full border border-gray-300 py-3 pl-4 pr-32 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    />
                    <button
                        type="button"
                        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black px-6 py-3 text-white font-semibold text-sm hover:bg-blue-700 transition"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
            <div className=' flex items-center mt-15'>
                <img src={logo} alt="logo" width={80} />
                <h2 className='text-4xl font-semibold'>SHOPPER</h2>
            </div>

            <div className=' flex gap-8 mt-5'>
                {footerlinks.map((item) => {
                    return <ul key={item.id} >
                        <li>{item.name}</li>
                    </ul>
                })}
            </div>
            {/* logos */}
            <div className=' flex items-center gap-10 mt-5'>
                <img src={iglogo} alt="instagram logo" width={20}/>
                <img src={walogo} alt="whatsapp logo" width={20}/>
            </div>
                <hr className="w-full border-t-[1.5px] border-gray-400" />

            <div>
                <p className=' text-gray-700'>Copyright @2025 All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
