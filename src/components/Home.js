import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'




const Home = () => {

    return (



    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w [1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>Saad Yusuf</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a full-stack developer</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>
                Resumer Introduction Resumer IntroductionResumer Introduction
                Resumer Introduction Resumer IntroductionResumer Introduction
                Resumer Introduction Resumer IntroductionResumer Introduction
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>

        </div>
    </div>
)
}

export default Home