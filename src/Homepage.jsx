import React from 'react'

import { Player } from 'video-react';
const Homepage = () => {
  return (
   <>
  <div className=" bg-black hidden lg:block h-full bg-cover bg-no-repeat" style={{backgroundImage: `url('./src/Images/mobileBg.png')`}}>
        {/* Content for mobile */}
        <div className=' py-20'>

        </div>
        <div className=' py-10 px-4'>
  {/* <ul className='flex flex-col gap-5 mx-5 items-start'>
    {["New Rummy App", "New casino apps", "SIGNUP BONUS APPS", "win predictions"].map((item, index) => (
      <li className='flex items-center justify-start gap-2' key={index}>
        <img src='./src/Images/star.png' className='w-8'></img>
        <p className='text-shadow shadow-red-500 text-3xl font-lilita text-white'>{item.toUpperCase()}</p>
      </li>
    ))}
  </ul> */}
</div>
<div className=' bg-white '>
<Player autoPlay={true} playsInline fluid={true}>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Player>

</div>
<div className='py-10 px-5'>
  <div className='bg-amber-300 py-6 active:bg-yellow-600 text-center text-3xl rounded-full text-white font-bold'>
    CLICK HERE
  </div>

</div>

       
    </div>

    {/* Mobile Background */}
    <div className="block bg-black lg:hidden h-screen bg-contain bg-no-repeat" style={{backgroundImage: `url('./src/Images/mobileBg.png')`}}>
        {/* Content for mobile */}
        {/* <div className=' py-20'>

        </div> */}
        <div className=' py-48 px-4'>
 
</div>
<div className=' py-10 px-5'>
  <button>

  <img src='./src/Images/btn.png' className='animate-wiggle'></img>
  </button>

</div>
<div className=' bg-white '>
<Player autoPlay={true} playsInline fluid={true}>
      <source src="./src/Images/Play.mp4" />
    </Player>

</div>


       
    </div>

   </>
  )
}

export default Homepage