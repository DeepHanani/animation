import React from 'react'
import './Header.css'


export default function Header(){
  return (
    <div className='containerMain'>
    <div className='imgDiv'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UXhHxtAoe_4-1Yf5JpmCrnFLhORJk_3zNQ&usqp=CAU" alt="" />
    </div>
    
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>

      </ul>
    </div>
  )
}
