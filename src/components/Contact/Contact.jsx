import React from 'react';
import Container from '../Shared/Container';

const Contact = () => {
    return (
        <div className=' bg-lime-600 py-6'>
          <Container>
            <div className=' grid gap-3 md:grid-cols-2'>
                <section className=' col-span-1 px-12 font-bold place-content-center'>
                    <p className=' text-4xl font-semibold'>Contact Us</p>
                    <p className=' mt-2'>If you need any further information please
                        <br /> do not hesitate to contact us.</p>
                    <p>Call 01607595684</p>
                    <p>madubilota@gmail.com</p>
                </section>
                <section>
                    <div className='sm:mt-2 flex gap-4 md:justify-around'>
                        <p className=''> <input className='bg-lime-600 border-b text-white py-1 px-2  focus:outline-none focus:border-red-800 focus:border-b-2 placeholder-zinc-950' type="text" name=""  placeholder='Name' id="" /></p>
                        
                        <p className=''> <input className='bg-lime-600 border-b text-white py-1 px-2  focus:outline-none placeholder-gray-950 focus:border-red-800 focus:border-b-2 ' type="text" name=""  placeholder='Company' id="" /></p>
                       
                    </div>
                    <br />
                    <div className='flex gap-4 md:justify-around'>
                        <p className=''> <input className='bg-lime-600 border-b text-white py-1 px-2  focus:outline-none focus:border-red-800 focus:border-b-2 placeholder-zinc-950' type="email" name=""  placeholder='Email' id="" /></p>
                        
                        <p className=''> <input className='bg-lime-600 border-b text-white py-1 px-2  focus:outline-none placeholder-gray-950 focus:border-red-800 focus:border-b-2 ' type="text" name=""  placeholder='Phone' id="" /></p>
                       
                    </div>
                    <br />
                    <div className='md:px-10'>
                    <p className=''> <input className='bg-lime-600 w-full border-b text-white py-1 px-5  focus:outline-none placeholder-gray-950 focus:border-red-800 focus:border-b-2 ' type="text" name=""  placeholder='Type your message...' id="" /></p>
                    <br /> 
                    <button className=' btn bg-red-500 rounded-lg px-4 py-1' type="button"> Submit</button>
                    </div>
                    
                </section>
            </div>
          </Container>
        </div>
    );
};

export default Contact;