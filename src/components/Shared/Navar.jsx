import React from 'react';
import Container from './Container';
import Link from 'next/link';

const Navar = () => {
    return (
        <div className=' bg-lime-400 py-2'>
          <Container >
    <div className='sm:text-center md:flex justify-between font-semibold '> 
        <section className=' text-2xl'>Garden Solution</section>
        <section className='flex gap-2 md:gap-8'>
            <Link href={'/'}>Home</Link>
            <Link href={'ee'}>Gallery</Link>
            <Link href='/contact'>Contact</Link>
            <Link href={'/About'}>About</Link>
        </section>
    </div>
</Container>
        </div>            
    );
};

export default Navar;