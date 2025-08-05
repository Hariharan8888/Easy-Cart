import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
    const infoItems = [
        {
            id: 0,
            icon: <FaShippingFast className='text-3xl text-blue-600' />,
            title: 'Free Shipping',
            description: 'Get your orders delivered with no extra cost'
        },
        {
            id: 1,
            icon: <FaHeadset className='text-3xl text-blue-600' />,
            title: '24/7 Support',
            description: 'We are here to assist you anytime'
        },
        {
            id: 2,
            icon: <FaMoneyBillWave className='text-3xl text-blue-600' />,
            title: '100% Money back',
            description: 'Get your orders delivered with no extra cost'
        },
        {
            id: 3,
            icon: <FaLock className='text-3xl text-blue-600' />,
            title: 'Payment Secure',
            description: 'Your payment information is safe with us'
        },
        {
            id: 4,
            icon: <FaTag className='text-3xl text-blue-600' />,
            title: 'Discounts',
            description: 'Enjoy the best prices on our Products'
        },
    ]


  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((item) => (
                <div key={item.id} className='flex flex-col items-center text center p-4 border rounded-lg shadow-md
                transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection