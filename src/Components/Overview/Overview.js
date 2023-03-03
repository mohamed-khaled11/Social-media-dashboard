import React from 'react'
import OverviewCard from './OverviewCard';
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaYoutubeSquare} from 'react-icons/fa'

const Overview = () => {
  return (
    <div className='overview mt-10'>
      <h2 className='text-3xl text-white font-bold text-left '>Overview - Today</h2>
      <div className='text-white mt-10 mb-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3'>
          <OverviewCard brandColor={"text-facebook"} icon={<FaFacebookSquare />} analysis={"87"} title={"page views"}></OverviewCard>
          <OverviewCard brandColor={"text-facebook"} icon={<FaFacebookSquare />} analysis={"52"} title={"Likes"}></OverviewCard>
          <OverviewCard brandColor={"text-twitter"} icon={<FaTwitterSquare />} analysis={"5462"} title={"page views"}></OverviewCard>
          <OverviewCard brandColor={"text-twitter"} icon={<FaTwitterSquare />} analysis={"52k"} title={"Likes"}></OverviewCard>
          <OverviewCard brandColor={"text-instagram"} icon={<FaInstagramSquare />} analysis={"117"} title={"page views"}></OverviewCard>
          <OverviewCard brandColor={"text-instagram"} icon={<FaInstagramSquare />} analysis={"507"} title={"Likes"}></OverviewCard>
          <OverviewCard brandColor={"text-youtube"} icon={<FaYoutubeSquare />} analysis={"107"} title={"page views"}></OverviewCard>
          <OverviewCard brandColor={"text-youtube"} icon={<FaYoutubeSquare />} analysis={"1407"} title={"Likes"}></OverviewCard>
      </div>
    </div>
  )
}
export default Overview;