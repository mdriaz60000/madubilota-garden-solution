import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center    text-center  '>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <br />
      <Link className=' btn bg-red-400 p-2 rounded-lg' href="/">Return Home</Link>
    </div>
  )
}