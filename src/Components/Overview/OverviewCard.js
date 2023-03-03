import React from 'react'
import {FaCloud} from 'react-icons/fa'
// import {AiFillCloud} from 'react-icons'

const OverviewCard = ({brandColor,icon,analysis,title}) => {
  return (
        <div className='overview-card'>
            <div className='flex justify-between items-center mb-7'>
                <p className='text-xl font-medium'>{title}</p>
                <p className={brandColor}>{icon}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-3xl'>{analysis}</p>
                <p className='flex justify-center items-center text-green-600'>
                    <span className='mr-2'><FaCloud /></span>
                    <span>3%</span>
                </p>
            </div>
        </div>
  )
}
export default OverviewCard;