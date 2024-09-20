import React from 'react';
import Container from './Container';
import Link from 'next/link';

const Navar = () => {
    return (
        <div className=' bg-lime-400 py-2'>
          <Container >
    <div className=' flex justify-between font-semibold '> 
        <section className=' text-2xl'>Garden Solution</section>
        <section className='flex gap-8'>
            <Link href={'/'}>Home</Link>
            <Link href={'ee'}>Gallery</Link>
            <Link href={'ee'}>Contact</Link>
            <Link href={'ee'}>About</Link>
        </section>
    </div>
</Container>
        </div>
    );
};

export default Navar;