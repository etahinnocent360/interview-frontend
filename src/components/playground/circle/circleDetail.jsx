import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPi, faTrash } from '@fortawesome/sharp-solid-svg-icons'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getSingleCircle, deleteCircle} from '../../../app/reducers/circleSlice'
import { baseURL } from '../../../base/config'
import Loading from '../../../loader/loarding'
import './circle.css'

export default function CircleDetails() {
  const { circle, isLoading } = useSelector((store) => store.allcircles)
  const [option, setOption] = useState()
  const [units, setUnits] = useState()
  const [name, setName] = useState()
  const [data, setData] = useState()
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleCircle(id))
  }, [id])
  if (isLoading) {
    return <Loading />
  }
  const handleDelete = () => {
    dispatch(deleteCircle(id)).then(() =>{
      window.location.replace('/playground/circles')
    })
  }

  const handleUpdate = (e) =>{
    e.preventDefault()
    axios.put(`${baseURL}/circle/${id}`, {name, units, radius:circle.radius}).then((response) =>{
      window.location.reload()
      return response.data
    })
  }

  if (option === 'perimeter') {
    return (
      <div className='circle'>
        <div className="top">
          <div className="left">
            <h5>Your Answer</h5>
            <input className='answer' type="text" value={circle.perimeter} />
            <span>{circle.units}</span>
            <h4>Explanation</h4>
          </div>
          <div className="right">
            <select value={option} className='answer select' onChange={(e) => setOption(e.target.value)}>
              <option >perimeter</option>
              <option >area</option>
            </select>
          </div>
        </div>

        <div className="cards card3">
          <p style={{ marginLeft: '30px' }} className='new'>The circle with radius {circle?.radius} has perimeter {circle?.perimeter} meters</p>
          <FontAwesomeIcon style={{ marginLeft: '30px' }} icon={faCircle} color='#3fcc52a2' size="6x" />
          <div style={{ marginLeft: '30px', marginTop: '5px' }}>
            <FontAwesomeIcon display={'block'} icon={faPi} />
            <span> is = 3.14</span>
          </div>
        </div>
        <div className="cards card3">
          <p style={{ marginLeft: '30px' }}>This formular was used to fined the area from the radius</p>
          <span style={{ marginLeft: '30px' }}>perimeter = 2*</span>
          <FontAwesomeIcon display={'block'} icon={faPi} /><span>*r</span>
          <p style={{ marginLeft: '30px' }}>using 3.14 as an aproximate for <FontAwesomeIcon display={'block'} icon={faPi} /></p>
          <FontAwesomeIcon style={{ marginLeft: '30px' }} display={'block'} icon={faPi} /> <span>= 3.14</span>
        </div>
        <div className="cards card3 cards3a">
          <p style={{ marginLeft: '30px' }}>The  radius is 3 replace r with 3</p>
          <span style={{ marginLeft: '30px' }}>Area = </span>
          <FontAwesomeIcon display={'block'} icon={faPi} /><span>r^2</span>
          <p style={{ marginLeft: '30px' }}>= 2(3.14)*{circle.radius}</p>
          <p style={{ marginLeft: '30px' }}>= {circle.perimeter}{circle.units}</p>
          <p style={{ marginLeft: '30px' }}>the perimeter is {circle.perimeter}{circle.units}</p>
        </div>
        <form action="" className='form detail'>
        <input className='inputs numbers' value={circle.radius} onChange={(e) => setData(e.target.value)} placeholder='Enter the radius eg 47' type="number" />
        <select className='inputs others' value={name} onChange={(e) => setName(e.target.value)} name="" id="">
          <option >area</option>
          <option >perimeter</option>
        </select>
        <select value={units} className='inputs others' onChange={(e) => setUnits(e.target.value)} >
          <option >m</option>
          <option >cm</option>
          <option >dm</option>
          <option >mm</option>
          <option >km</option>
        </select>
        <button className='inputs others' onClick={handleUpdate}>Update</button>
        <FontAwesomeIcon className='trash' onClick={handleDelete} icon={faTrash} title='delete solution'/>
      </form>
      <Link to={'/playground/circles'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
      </div>
    )
  }
  console.log(option)
  return (
    <div className='circle'>
      <div className="top">
        <div className="left">
          <h5>Your Answer</h5>
          <input className='answer' type="text" value={circle.area} />
          <span>{circle.units}^2</span>
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
        <p style={{ marginLeft: '30px' }} className='new'>The circle with radius {circle.radius} has area {circle.area} meters square</p>
        <FontAwesomeIcon style={{ marginLeft: '30px' }} icon={faCircle} color='#3fcc52a2' size="6x" />
        <div style={{ marginLeft: '30px', marginTop: '5px' }}>
          <FontAwesomeIcon display={'block'} icon={faPi} />
          <span> is = 3.14</span>
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
        <p style={{ marginLeft: '30px' }}>= 3.14*{circle.radius}^2</p>
        <p style={{ marginLeft: '30px' }}>= 3.14*{circle.radius}*{circle.radius}</p>
        <p style={{ marginLeft: '30px' }}>= {circle.area}{circle.units ^ 2}</p>
        <p style={{ marginLeft: '30px' }}>the area is {circle.area}{circle.units}^2</p>
      </div>
      <form action="" className='form detail'>
        <input className='inputs numbers' value={circle.radius} onChange={(e) => setData(e.target.value)} placeholder='Enter the radius eg 47' type="number" />
        <select className='inputs others' value={name} onChange={(e) => setName(e.target.value)} name="" id="">
          <option >area</option>
          <option >perimeter</option>
        </select>
        <select value={units} className='inputs others' onChange={(e) => setUnits(e.target.value)} >
          <option >m</option>
          <option >cm</option>
          <option >dm</option>
          <option >mm</option>
          <option >km</option>
        </select>
        <button className='inputs others' onClick={handleUpdate}>Update</button>
        <FontAwesomeIcon className='trash' onClick={handleDelete} icon={faTrash} title='delete solution'/>
      </form>
      <Link to={'/playground/cubes'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
    </div>
  )
}
