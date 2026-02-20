import { events } from '@react-three/fiber'
import React from 'react'

const Item = ({fooditem,handleBuyButton}) => {

 
  return (<li className='list-group-item'>
    <span className='items'>{fooditem} </span>
    <button className='button'  onClick={handleBuyButton}>Buy</button>
    </li>
  ) 
}

export default Item;