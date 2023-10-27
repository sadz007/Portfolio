import React from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import ReactImg from "../assets/react.png"
import Node from "../assets/node.png"
import GitHub from "../assets/github.png"
import Tailwind from "../assets/tailwind.png"
import Mongo from "../assets/mongo.png"
import Flask from "../assets/flask.png"
import MySQL from "../assets/mysql.png"
import Python from "../assets/python.png"
import BootStrap from "../assets/bootstrap.png"



const Skills = () => {



    return (

        <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300 '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>// These are the techonologies I've worked with </p>
                </div>
            {/* Container Icons */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8  '>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto pt-2"src={HTML} alt='HTML icon'/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto pt-2"src={CSS} alt='CSS icon'/>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto pt-2"src={JavaScript} alt='JavaScript icon'/>
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto pt-2 "src={ReactImg} alt='ReactImg icon'/>
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto "src={Node} alt='Node icon'/>
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto "src={Mongo} alt='Mongo icon'/>
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto "src={Flask} alt='Flask icon'/>
                        <p className='my-4'>FLASK</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto "src={Python} alt='Python icon'/>
                        <p className='my-4'>PYTHON</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto pt-6 "src={MySQL} alt='MySQL icon'/>
                        <p className='my-4'>MYSQL</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto "src={Tailwind} alt='Tailwind icon'/>
                        <p className='my-4'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto "src={BootStrap } alt='BootStrap icon'/>
                        <p className='my-4'>BOOTSTRAP </p>
                    </div>
                    
                    
                    <div className='shadow-md shadow-gray-400 hover:scale-110 duration-500 rounded-xl'>
                        <img className="w-20 mx-auto "src={GitHub} alt='GitHub icon'/>
                        <p className='my-4'>GitHub</p>
                    </div>
                    
                    

                    

                </div>


            </div>
            
        </div>
    )
}

export default Skills