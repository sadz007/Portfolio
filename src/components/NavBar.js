import React,{useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes,FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import{BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'




const NavBar = () => {
    const [nav, setNav] =useState(false)
    const handleClick = () =>setNav(!nav)



    return (
        <div className="fixed w-full h-[90px] flex justify-between items-center px-6  bg-gray-900  text-gray-300">
            <div className=''>
                {/* <img src={Logo} alt="Logo Image" style={{width: '50px'}} /> */}
                <h2 className='bg-gray-300 p-4 w-auto-full  text-4xl text-gray-900 rounded-full border-2 border-gray-900 shadow-md shadow-pink-600'>SY</h2>
            </div>
                {/* Menu' */}
                <ul className='hidden md:flex'>
                    <li>
    {/* Link component to scroll to "test1" element with specified properties */}
                        <Link to="home" smooth={true} duration={500} >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} >
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} >
                        Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} duration={500} >
                        Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} >
                        Contact
                        </Link>
                    </li>
                </ul>

            {/* Hamburger Bar */} 
            <div onClick={handleClick} className='md:hidden z-10'>
                {
                    !nav? <FaBars/>: <FaTimes/>
                }
                
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li  className='py-6 text-4xl hover:border-b-2 hover:border-pink-600'>
                        <Link  onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                        </Link>
                        </li>
                    <li className='py-6 text-4xl hover:border-b-2 hover:border-pink-600'>
                        <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                        </Link>
                        </li>
                    <li className='py-6 text-4xl hover:border-b-2 hover:border-pink-600'>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                        </Link>
                        </li>
                    <li className='py-6 text-4xl hover:border-b-2 hover:border-pink-600'>
                        <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Work
                        </Link>
                        </li>
                    <li className='py-6 text-4xl hover:border-b-2 hover:border-pink-600'>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact
                        </Link>
                        </li>
            </ul>
            {/* Social Icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300 '>
                            LinkedIn<FaLinkedin size={30}/>
                            
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-700'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300 '>
                            Github<FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300 '>
                            Email<HiOutlineMail size={30}/>
                            
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300 '>
                            Resume<BsFillPersonLinesFill size={30}/>
                            
                        </a>
                    </li>
                </ul>
                
            </div> 

        </div>
)
}

export default NavBar