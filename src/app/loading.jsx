'use client'
import { InfinitySpin } from 'react-loader-spinner';

const loading = () => {
    return (
        <div   className=' flex justify-center items-center h-screen ' >
             <InfinitySpin
           
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
        </div>
    );
};

export default loading;