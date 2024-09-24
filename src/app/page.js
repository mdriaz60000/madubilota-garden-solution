'use client'
import About from '@/components/About/About';
import Product from '@/components/Product/Product';
import Banner from '@/components/Shared/Banner';
import React from 'react';
import Contact from './../components/Contact/Contact';

const page = () => {
  return (
    
    <div>
    <Banner></Banner>
    <About></About>
    <Product></Product>
    <Contact></Contact>


    </div>
  );
};

export default page;
