//eslint-disable-next-line 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCircles, createCircle } from '../../../app/reducers/circleSlice'
import Loading from '../../../loader/loarding'
import { faCircleO } from '@fortawesome/sharp-solid-svg-icons'
import { Link } from 'react-router-dom'
import './circle.css'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'


export default function Circle() {
  
  const [units, setUnits] = useState()
  const [name, setName] = useState()
  const [data, setData] = useState()
  const radius = Number(data)
  const { circles, isLoading} = useSelector((store) => store.allcircles)
  const dispatch = useDispatch()
  console.log(name)
  useEffect(() => {
    dispatch(getCircles(circles))
     // eslint-disable-next-line
  }, [dispatch])

  const newCircle = (e) => {
    e.preventDefault()
    dispatch(createCircle({
      units,
      name,
      radius
    })).then(() =>{
      window.location.reload()
    })
  }
  // console.log(circle, 'new circle')


  if (isLoading) {
    return <Loading />
  }
  return (
    <div className='circle-new'>
      <div className='create'>
        <form action="" className='form'>
          <input className='inputs numbers' value={data} onChange={(e) => setData(e.target.value)} placeholder='Enter the radius eg 47' type="number" />
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
          <button className='inputs others' onClick={newCircle}>Submit</button>
        </form>
        <div action="" className='result'>
          {circles?.map((circle) => (
            <Link to={`/playground/circle/${circle.id}`} className='result-cat' key={circle.id}>
              <FontAwesomeIcon className='awesome' title='click me' size='7x' color='#00c31a4b' icon={faCircleO}></FontAwesomeIcon>
            </Link>
          ))}
        </div>
      </div>
      <Link to={'/playground'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
    </div>
  )
}
