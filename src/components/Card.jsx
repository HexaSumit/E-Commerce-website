import React from 'react'

const Card = ({img,name,newPrice,oldPrice}) => {
    return (
        <div className=' pb-10 cursor-pointer'>
            <div className="w-60 hover:scale-y-105 shadow-md overflow-hidden transition-transform duration-300 ease-in-out">
                <img
                    src={img}
                    alt="Product"
                    className="w-full h-56 object-cover"
                />

                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

                    <div className="flex items-center gap-3 mt-2">
                        <span className="text-red-500 font-semibold text-base">{newPrice}</span>
                        <span className="text-gray-400 line-through text-sm">{oldPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card