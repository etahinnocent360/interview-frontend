import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import '../playground/playground.css'

export default function PlayLanding() {
  return (
    <div className='play'>
      <h1 style={{textAlign:'center', marginTop:'30px'}}>Lets Play Together</h1>
      <div className='flex-items'>
    <Link to={'/playground/triangles'} style={{color:'black'}} className="cards card1">
    <div  title='Click me'>
          <div className="headers">
            <div className="numbering one">
              <h4>1</h4>
            </div>
            <p>Triangle</p>
          </div>
          <p className='describe'>Calculate the area and perimeter of a Triangle</p>
          <hr style={{ width: '80%', color:'#f5f5f5'  }} />
          <div className="bottom">
            <p>Area</p>
            <p>Perimeter</p>
          </div>
        </div>
    </Link>
       <Link to={'/playground/square'} style={{color:'black'}}  className="cards card2">
       <div title='Click me'>
          <div className="headers">
            <div className="numbering two">
              <h4>2</h4>
            </div>
            <p>Square</p>
          </div>
          <p className='describe'>Calculate the area and perimeter of a square</p>
          <hr style={{ width: '80%', color:'#f5f5f5' }} />
          <div className="bottom">
            <p>Area</p>
            <p>Perimeter</p>
          </div>
        </div>
       </Link>
      <Link to={'/playground/circles'} style={{color:'black'}} className="cards card3">
      <div title='Click me'>
          <div className="headers">
            <div className="numbering three">
              <h4>3</h4>
            </div>
            <p>Circle</p>
          </div>
          <p className='describe'>Calculate the area and perimeter of a circle</p>
          <hr style={{ width: '80%', color:'#f5f5f5'}} />
          <div className="bottom">
            <p>Area</p>
            <p>Perimeter</p>
          </div>
        </div>
      </Link>
        <Link to={'/playground/cubes'}  style={{color:'black'}}  className="cards card4">
        <div  title='Click me'>
          <div className="headers">
            <div className="numbering four">
              <h4>4</h4>
            </div>
            <p>Cube</p>
          </div>
          <p className='describe'>Calculate the area and perimeter of a cube</p>
          <hr style={{ width: '80%', color:'#f5f5f5' }} />
          <div className="bottom">
            <p>Area</p>
            <p>Perimeter</p>
          </div>
        </div>
        </Link>
       <Link to={'/playground/rectangle'}  style={{color:'black'}}  className="cards card5">
       <div title='Click me'>
          <div className="headers">
            <div className="numbering five">
              <h4>5</h4>
            </div>
            <p>Rectangle</p>
          </div>
          <p className='describe'>Calculate the area and perimeter of a rectangle</p>
          <hr style={{ width: '80%', color:'#f5f5f5' }} />
          <div className="bottom">
            <p>Area</p>
            <p>Perimeter</p>
          </div>
        </div>
       </Link>
      </div>
      <Link to={'/'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
    </div>
  )
}
