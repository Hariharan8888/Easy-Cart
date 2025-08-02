import React from 'react'
import {Catagories} from '../assets/mockData'
import Heropage1 from '../assets/Images/Heropage1.jpg'

const Home = () => {
  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
          <div className='w-full md:w-3/12'>
            <div className='bg-blue-500 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATAGORIES</div>
            <ul className='space-y-4 bg-gray-100 p-3 border'>
              {Catagories.map((catagory, index) => (
                <li key={index} className='flex items-center text-sm font-medium'>
                  <div className='w-2 h-2 border border-blue-700 rounded-full mr-2'></div>
                  {catagory}
                  </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-10/12 mt-8 md:mt-0 h-96 relative'>
            <img src={Heropage1} alt='Heropage' className='h-full w-full'/>
            <div className='absolute top-16 left-8'>
             <p className='text-white mb-4'>Shop with me</p>
             <h2 className='text-white text-3xl font-bold'>WELCOME TO EASY-CART</h2>
             <p className='text-xl mt-2.5 font-bold text-white'>MILLIONS+ PRODUCTS</p>
             <button className='bg-blue-500 px-8 py-1.5 text-white mt-4 hover:bg-violet-700 transform
             transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home