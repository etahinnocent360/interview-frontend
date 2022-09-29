import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPi, faTriangle } from '@fortawesome/sharp-solid-svg-icons'
import React, { useState } from 'react'
import './triangle.css'
export default function TriangleDetail() {
    const [option, setOption] = useState()
    return (
        <div className='triangle'>   
       <div className="top">
        <div className="left">
        <h5>Your Answer</h5>
        <input className='answer' type="text" value={28.26} />
        <span>Square meters</span>
        <h4>Explanation</h4>
        </div>
        <div className="right">
        <select value={option} className='answer select' onChange={(e) => setOption(e.target.value)}>
        <option >area</option>
        <option >perimeter</option>
        </select>
        </div>
      </div>

      <div className="cards card3">
        <p style={{ marginLeft: '30px' }} className='new'>The circle with radius 3 has area 28.26 meters square</p>
        <FontAwesomeIcon style={{ marginLeft: '30px' }} icon={faTriangle} color='#3fcc52a2' size="6x" />
        <div style={{ marginLeft: '30px', marginTop: '5px' }}>
         <p style={{display:'inline-block'}}>height</p>
          <span> is = 6</span>
        </div>
        <div style={{ marginLeft: '30px', marginTop: '-20px' }}>
         <p style={{display:'inline-block'}}>base</p>
          <span> is = 4</span>
        </div>
      </div>
      <div className="cards card3">
        <p style={{ marginLeft: '30px' }}>This formular was used to fined the area from the radius</p>
        <span style={{ marginLeft: '30px' }}>Area = </span>
        <FontAwesomeIcon display={'block'} icon={faPi} /><span>r^2</span>
        <p style={{ marginLeft: '30px' }}>using 3.14 as an aproximate for <FontAwesomeIcon display={'block'} icon={faPi} /></p>
        <FontAwesomeIcon style={{ marginLeft: '30px' }} display={'block'} icon={faPi} /> <span>= 3.14</span>
      </div>
      <div className="cards card3 cards3a">
        <p style={{ marginLeft: '30px' }}>The  radius is 3 replace r with 3</p>
        <span style={{ marginLeft: '30px' }}>Area = </span>
        <FontAwesomeIcon display={'block'} icon={faPi} /><span>r^2</span>
        <p style={{ marginLeft: '30px' }}>= 3.14*3^2</p>
        <p style={{ marginLeft: '30px' }}>= 3.14*3*3</p>
        <p style={{ marginLeft: '30px' }}>= 28.26</p>
        <p style={{ marginLeft: '30px' }}>the area is 28.26</p>
      </div>
       </div>
    )
}
