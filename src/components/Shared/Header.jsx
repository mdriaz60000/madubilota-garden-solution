import React from 'react';
import Container from './Container';

const Header = () => {
    return (  
       <Container>
         
         <div className=' flex justify-between'>
            <p className=' text-4xl text-lime-500'>Madubilota</p>
            <p className=' text-2xl'> 01601595684</p>
         </div>
       </Container>
    );
};

export default Header;