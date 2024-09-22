import Image from 'next/image';
import React from 'react';
//import SimpleParallax from "simple-parallax-js";

const Banner = () => {
    return (
        <div>
            {/* <SimpleParallax > */}
            <Image className=' w-full' src='https://static.wixstatic.com/media/58dd64_490189ffa72d4190b2c58a0c84dbafc4~mv2.jpg/v1/fill/w_1600,h_721,al_c,q_85,enc_auto/58dd64_490189ffa72d4190b2c58a0c84dbafc4~mv2.jpg ' width={800} height={400} layout='responsive' 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=''></Image>
         {/* </SimpleParallax> */}

        </div>
    );
};

export default Banner;