import { useState } from 'react'

import './App.css'

function App() {

  const cards=[
    { title: 'Card 1', description: 'This is the first card', image: 'https://via.placeholder.com/150' },
    { title: 'Card 2', description: 'This is the second card', image: 'https://via.placeholder.com/150' },
    { title: 'Card 3', description: 'This is the third card', image: 'https://via.placeholder.com/150' },
    { title: 'Card 4', description: 'This is the fourth card', image: 'https://via.placeholder.com/150' },
    { title: 'Card 5', description: 'This is the fifth card', image: 'https://via.placeholder.com/150' },
    { title: 'Card 6', description: 'This is the sixth card', image: 'https://via.placeholder.com/150' },
    { title: 'Card 7', description: 'This is the seventh card', image: 'https://via.placeholder.com/150' },
    { title: 'Card 8', description: 'This is the eighth card', image: 'https://via.placeholder.com/150' },
    { title: 'Card 9', description: 'This is the ninth card', image: 'https://via.placeholder.com/150' },
    { title: 'Card 10', description: 'This is the tenth card', image: 'https://via.placeholder.com/150' },
  ]
  


  return (
    <>
      {/* <div className="flex ">
        <div className='p-4 border rounded-lg'>Hello</div>
        <div className='p-4  border rounded-lg text-blue-500'>Hello</div>
        <div className='p-4  border rounded-lg bg-blue-500 text-white'>Hello</div>
      </div>

    <div className='flex flex-wrap gap-4'> 
        <div className='w-[30%] p-4  border rounded-lg text-blue-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </div>
        <div className='w-[30%] p-4  border rounded-lg text-blue-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </div>
        <div className='w-[30%] p-4  border rounded-lg text-blue-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </div>
        <div className='w-[30%] p-4  border rounded-lg text-blue-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </div>
        <div className='w-[50%] p-4  border radius-lg bg-blue rounded-lg text-green-700'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </div>
        
       
       
    </div> */}



    <div className='flex gap-5 items-center mb-4 justify-center bg-gray-200 p-6' >
      <button className='bg-blue-500 w-32 p-2 rounded-lg text-white hover:bg-blue-700 '>All</button>
      <button className='bg-blue-500 w-32 p-2 rounded-lg text-white hover:bg-blue-700'>Category</button>
      <button className='bg-blue-500 w-32 p-2 rounded-lg text-white hover:bg-blue-700'>Collection</button>
      <button className='bg-blue-500 w-32 p-2 rounded-lg text-white hover:bg-blue-700'>Price</button>
      
    </div>
<div>
  <div className='flex flex-wrap gap-5 justify-center '> 

        {cards.map((card, index) => (

          <div key={index} className='flex flex-col w-50 md:w-1/4 lg:w-1/3 justify-center items-center gap-3 p-3 border rounded-lg shadow-lg bg-blue-50'>
            <img src={card.image} alt={card.title} className='w-48 h-48 bg-blue-200 object-cover rounded-lg transform hover:-translate-y-2 hover:shadow-lg ' />
            <h2 className='text-lg font-bold'>{card.title}</h2>
            <p className='text-gray-500'>{card.description}</p>
            <button className='bg-blue-500 w-32 p-2 rounded-lg text-white hover:bg-blue-800' > View Details</button>
          </div>
        ))}
    </div>
    </div>
      
    

    {/* <div className='flex flex-wrap gap-5 justify-center '>
      <div className='border rounded-lg p-4 mb-4 transform hover:-translate-y-2 hover:shadow-lg'>
        <p className='text-gray-500 mb-2 '>07h 09m 15s</p>
        <p className='font-bold text-lg mb-2'>Sun Glass</p>
        <p className='text-gray-500 mb-2'>Current bid</p>
        <p className='font-bold text-lg mb-2'>1,75ETH</p>
        <button className='bg-blue-500 w-32 p-2 rounded-lg text-white hover:bg-blue-800' > Place BID</button>
      
      </div> */}

     
    {/* </div> */}
    </>
  )
}

export default App
