import React, { useEffect } from 'react'
import './cube.css'
export default function CubesDetail() {
  return (
    <div className='cubes'>
         <div className="top">
       <h5>Your Answer</h5>
       <input className='answer' type="text" value={3399.5}/>
       <span>Square meters</span>
       <h4>Explanation</h4>
       </div>
        <div className="cards card3">
         <p>The circle with radius 3 has area 3299 meters square</p>
         <i class="fa fa-circle-outline"></i>
        </div>
        <div className="cards card3">
         <p>The circle with radius 3 has area 3299 meters square</p>
         <i class="fa fa-circle-outline"></i>
        </div>
        <div className="cards card3">
         <p>The circle with radius 3 has area 3299 meters square</p>
         <i class="fa fa-circle-outline"></i>
        </div>
    </div>
  )
}
