import React from 'react'
import Card from '../Card/Card';
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaYoutubeSquare} from 'react-icons/fa'
const Cards = () => {
  return (
    <div className='cards grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3'>
        <Card brandColor={"text-facebook"} icon={<FaFacebookSquare />} followers={"1987"} ></Card>
        <Card brandColor={"text-twitter"} icon={<FaTwitterSquare />} followers={"1044"} ></Card>
        <Card brandColor={"text-instagram"} icon={<FaInstagramSquare />} followers={"11k"} ></Card>
        <Card brandColor={"text-youtube"} icon={<FaYoutubeSquare />} followers={"8239"} ></Card>
    </div>
  )
}
export default Cards;
