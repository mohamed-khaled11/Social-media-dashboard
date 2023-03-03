import React from 'react'
import {FaArrowAltCircleUp} from 'react-icons/fa'
const Card = ({brandColor,icon,followers}) => {
  return (
        <div className='card'>
            <div className='text-xl flex justify-center items-center gap-1'>
              <span className={brandColor}>{icon}</span>
              <span>@nathanf</span>
            </div>
            <h2 className='text-7xl font-bold mt-4'>{followers}</h2>
            <p className='text-xl tracking-widest uppercase text-gray-500'>Followers</p>
           <div className='text-green-600 flex justify-center items-center gap-1 text-sm mt-8'>
           <span ><FaArrowAltCircleUp></FaArrowAltCircleUp> </span>
            <span>12 Today</span>
           </div>
        </div>
  )
}
export default Card;
