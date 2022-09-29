import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './rectangle.css'
import { getRectangles, createRectangle } from '../../../app/reducers/circleSlice'
import { faRectangle } from '@fortawesome/sharp-solid-svg-icons'
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Loading from '../../../loader/loarding'
export default function Rectangle() {
  const { rectangles, isLoading} = useSelector((store) => store.allcircles)
  const [data1, setHeight] = useState()
  const [data2, setWidth] = useState()
  const [name, setName] = useState()
  const [units, setUnits] = useState() 
  const height = Number(data1)
  const width = Number(data2)
  const dispatch = useDispatch()
console.log(rectangles,'form component')
  useEffect(() => {
    dispatch(getRectangles(rectangles))
  }, [dispatch])
 const newRectangle = (e) =>{
  e.preventDefault()
  dispatch(createRectangle({
    height,
    name,
    width,
    units
  })).then(() => {
    window.location.reload()
  })
 }
 if(isLoading){
  return <Loading/>
 }
  return (
<div className='new-rectangle'>
<div className='create'>
      <form action="" className='form'>
        <input className='inputs numbers' value={data1} placeholder='Enter the hieght eg 47' type="number" onChange={(e) => setHeight(e.target.value)} />
        <input className='inputs numbers' value={data2} placeholder='Enter the width eg 47' type="number" onChange={(e) => setWidth(e.target.value)} />
        <select value={name} className='inputs others' name="" id="" onChange={(e) => setName(e.target.value)}>
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
        <button className='inputs others' onClick={newRectangle}>Submit</button>
      </form>
      <div action="" className='result'>
          {rectangles?.map((rectangle) => (
            <Link to={`/playground/rectangles/${rectangle.id}`} className='result-cat' key={rectangle.id}>
              <FontAwesomeIcon className='awesome' title='click me' size='7x' color='#9900ab' icon={faRectangle}></FontAwesomeIcon>
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
