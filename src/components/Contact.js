import React from 'react'





const Contact = () => {



    return (
    <div name="contact" className='w-full md:h-screen bg-gray-900 flex justify-center items-center p-4 '>
        <form method= "POST" action='https://getform.io/f/94fe0e93-9e57-48c7-b58f-8322736d9251' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-gray-300'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
                    Contact
                </p>
                <p className='py-4'> // Submit the form below or send me an email - myemail.@mail.com</p>
            </div>

            <input type="text" name="name"  className='bg-gray-300 p-2' placeholder='Full Name'/>
            <input type="email" name="email"  className='my-4 p-2 bg-gray-300' placeholder='Email'/>
            <textarea className='bg-gray-300 p-2' name="Message" rows="10" placeholder='Message....'></textarea>
            

            <button className='px-4 py-3 my-8 max-auto flex justify-center items-center text-gray-200 border-2 hover:border-gray-600 hover:bg-pink-600'>Send</button>
            
        </form>


    </div>
    )
}

export default Contact