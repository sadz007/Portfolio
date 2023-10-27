import React from 'react'





const Contact = () => {



    return (
    <div name="contact" className='w-full h-screen bg-slate-800 flex justify-center items-center p-4'>
        <form action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-gray-300'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
                    Contact
                </p>
                <p className='py-4'> // Submit the form belwo or send me an email - myemail.@mail.com</p>
            </div>

            <input type="text" name="name" value="" className='bg-gray-300 p-2' placeholder='Name'/>
            <input type="text" name="email" value="" className='my-4 p-2 bg-gray-300' placeholder='Email'/>
            <textarea className='bg-gray-300 p-2' name="Message" rows="10"></textarea>
            

            <button className='px-4 py-3 my-8 max-auto flex justify-center items-center text-gray-200 border-2 hover:border-pink-600 hover:bg-pink-600'>Send</button>
            
        </form>


    </div>
    )
}

export default Contact