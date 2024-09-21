'use client'
import About from '@/components/About/About';
import Product from '@/components/Product/Product';
import Banner from '@/components/Shared/Banner';
import React from 'react';

const page = () => {
  return (
    <div>
    <Banner></Banner>
    <About></About>
    <Product></Product>


    </div>
  );
};

export default page;
