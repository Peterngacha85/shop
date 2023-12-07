import React, { useState } from 'react'
import './styles/shop.css'
import data from '../data.jsx'

const Shoping = () => {
  const {productItem} =  data
  const [test, setTest] = useState({})

  return (
    <div className='shop-container'>
      {productItem.map((item)=>(
       <div key={item.id}>
          <img src={import(`../assets/images/images${item.image}`).then((image) => image.default)}/>
          <h3>{item.name}</h3>
          <h4>$ {item.price}</h4>
          <button>Add to cart</button>
       </div>
      ))}
    </div>
  )
}

export default Shoping