
import { Player } from 'video-react';
import ImageExp from './Images';
const {Btn,Play,bg} = ImageExp;
const Homepage = () => {
  return (
   <>
  <div className=" bg-black hidden lg:block h-full bg-cover bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>
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
      <source src={Play} />
    </Player>

</div>
<div className=' py-10 px-5'>
  <button>

  <img src={Btn} className='animate-wiggle'></img>
  </button>

</div>

       
    </div>

    {/* Mobile Background */}
    <div className="block bg-black lg:hidden h-screen bg-contain z-10 bg-no-repeat" style={{backgroundImage: `url('${bg}')`}}>
        {/* Content for mobile */}
        {/* <div className=' py-20'>

        </div> */}
        <div className=' py-48 px-4'>
 
</div>
<div className=' py-10 px-5'>
  <a href='https://t.me/Ashwaniarrora'>

  <img src={Btn} className='animate-wiggle'></img>
  </a>

</div>
<div className=' bg-white '>
<Player autoPlay={true} playsInline fluid={true}>
      <source src={Play} />
    </Player>

</div>


       
    </div>

   </>
  )
}

export default Homepage