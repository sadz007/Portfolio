import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'




const Home = () => {

    return (



    <div name='home' className='w-full h-screen bg-gray-300 pl-12'>
        {/* Container */}
        <div className='max-w [1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-xl text-bold'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-200'>Saad Yusuf</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a full-stack developer</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>
                Resumer Introduction Resumer IntroductionResumer Introduction
                Resumer Introduction Resumer IntroductionResumer Introduction
                Resumer Introduction Resumer IntroductionResumer Introduction
            </p>
            <div>
                <button className='text-gray-500 group border-2 border-gray-500 px-6 py-3 my-2 flex items-center hover:text-gray-300 hover:bg-pink-600 hover:border-gray-400 '>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 text-bold'/>
                    </span>
                </button>
            </div>

        </div>
    </div>
)
}

export default Home