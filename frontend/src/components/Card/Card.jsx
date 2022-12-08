import React from 'react'
// import pic from "../../assets/images/bg1.png"
import "./Card.css"

const yajas = () =>{

}

const Card= ({data}) => {
  return (
    <div className='s justify-center items-center font-openSans cursor-pointer'>
    <div className='relative'>
    <div className='absolute top-0 left-0 px-6 py-4'>
    </div>
    </div>
    <h1 className=' font-openSans text-2xl'>Name-{data?.Name}</h1>
    <h2 className=' font-openSans '>Salary-{data?.Salary}</h2>
    <h3 className=' font-openSans '>Date-{data?.Date}</h3>
    <div className='mx-6 a text-orange-600'>
     {data?.description}
     <br></br>
     {data?.date?.split('T')[0]}
    </div>
    </div>
  )
}
export default Card;