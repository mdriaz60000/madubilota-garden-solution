import React from 'react';
import Container from './Container';

const Header = () => {
    return (  
       <Container>
         
         <div className=' md:flex md:justify-between '>
            <p className='text-center text-4xl text-lime-500'>Madubilota</p>
           
            <p className=' text-center  text-2xl '> 01601595684</p>
         </div>
       </Container>
    );
};

export default Header;