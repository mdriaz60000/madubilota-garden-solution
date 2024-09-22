import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div>
            <div className=' bg-lime-600 py-8 text-center text-3xl'>We exclusively supply retail outlets, unfortunately we do not supply the public.</div>
            <div className=' grid md:grid-cols-2'>
                <section className='  md:col-span-1'>
                <Image className='' src='https://static.wixstatic.com/media/58dd64_23cbec3c870d4b5b80e6ae1a8b40e308~mv2.jpg/v1/fill/w_645,h_536,al_c,q_80,enc_auto/58dd64_23cbec3c870d4b5b80e6ae1a8b40e308~mv2.jpg' width={300} height={200} layout='responsive' 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=''></Image>
                </section>
                <section className=' place-content-center px-2 md:px-16
                '>
                    <p className=' text-4xl text-lime-400 font-medium'>WHO WE ARE</p>
                    <p className=' text-3xl'>About us</p>
                    <br />
                    <p className=' text-2xl'>We have a factory in Gauteng where we produce 1000’s of different varieties of garden pots, water features and garden furniture that are made in fibre concrete. We also make custom pots and fibreglass products. </p>
                </section>
            </div>
            {/* 2 */}
            <div className=' grid md:grid-cols-2'>

                <section className=' place-content-center px-2 md:px-16
                '>
                    <p className=' text-4xl text-lime-400 font-medium'>
                    WHAT WE MANUFACTURER</p>
                    <p className=' text-3xl'>Our Products</p>
                    <br />
                    <p className=' text-2xl'>We continuously strive to create new concrete combinations in order to deliver stronger and more durable garden pots and water features to our clients.</p>
                </section>
                <section className='  col-span-1'>
                <Image className='' src='https://static.wixstatic.com/media/58dd64_77f4aa77ad0b472f941c0644f002585d~mv2.jpg/v1/fill/w_847,h_819,al_c,q_85,enc_auto/58dd64_77f4aa77ad0b472f941c0644f002585d~mv2.jpg' width={300} height={200} layout='responsive' 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=''></Image>
                </section>
            </div>
        </div>
    );
};

export default About;