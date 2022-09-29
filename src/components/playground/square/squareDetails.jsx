import React from 'react'
import './square.css'
export default function SquareDetail() {
    return (
        <div className='square'>   
        <div className="top">
            <h5>Your Answer</h5>
            <input className='answer' type="text" value={3399.5} />
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
            </div></div>
    )
}
