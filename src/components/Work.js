import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import RE from '../assets/projects/realestate.jpg'

const Work = () => {
    return (
        // bg-[#0a192f]
        <div name="work" className='bg-gray-300  w-full md:h-screen text-gray-900 '>
            <div className='max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-900'>Work</p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>
            
    {/* Container */}
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>

                {/* Grid Item Cards */}
    {/* BOX-1  */}
                <div 
                    style={{backgroundImage:`url(${WorkImg})`}}
                    className='shadow-lg shadow-gray-900 group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* XX Hover effects XX */}
                    <div className='opacity-0 group-hover:opacity-100' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application

                        </span> 
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                            </a>
                        </div>
                    </div>
                </div>
    {/* BOX-2 */}
                <div 
                    style={{backgroundImage:`url(${WorkImg})`}}
                    className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* XX Hover effects XX */}
                    <div className='opacity-0 group-hover:opacity-100 ' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application

                        </span> 
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                            </a>
                        </div>
                    </div>
                </div>
    {/* BOX-3  */}
                <div 
                    style={{backgroundImage:`url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* XX Hover effects XX */}
                    <div className='opacity-0 group-hover:opacity-100' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application

                        </span> 
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                            </a>
                        </div>
                    </div>
                </div>
    {/* BOX-4  */}
                <div 
                    style={{backgroundImage:`url(${WorkImg})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* XX Hover effects XX */}
                    <div className='opacity-0 group-hover:opacity-100' >
                        <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application

                        </span> 
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
  )
}

export default Work

