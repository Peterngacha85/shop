import React, { useState } from 'react'
import './styles/shop.css'
import data from '../data.jsx'
import testImage from '../assets/images/bag.jpg'

const Shoping = () => {
  const {productItem} =  data
  const [test, setTest] = useState({})

  return (
    <div className='shop-container'>
      {productItem.map((item)=>(
       <div className="image-container" key={item.id}>
          <img className='image' src={testImage}/>
          <h3>{item.name}</h3>
          <h4>$ {item.price}</h4>
          <button>Add to cart</button>
       </div>
      ))}
    </div>
  )
}

export default Shoping