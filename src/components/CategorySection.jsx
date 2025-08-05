import React from 'react'
import Mancategory from '../assets/Images/mancategory.jpg'
import Womancategory from '../assets/Images/womancategory.jpg'
import kidscategory from '../assets/Images/kidscategory.jpg'

const categories = [
    {
        id:0,
        title:'Men',
        imageUrl: Mancategory,
    },
    {
        id:1,
        title:'Women',
        imageUrl: Womancategory,
    },
    {
        id:2,
        title:'Kids',
        imageUrl: kidscategory,
    },
];



const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 ">
        {categories.map((category) => (
            <div key={category.id} className="relative h-64 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={category.imageUrl} alt='Category section' className="w-full h-full object-cover rounded-lg shadow-md"/>
                <div className="absolute top-20 left-12">
                    <p className="text-xl font-bold">{category.title}</p>
                    <p className="text-grey-600">View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection