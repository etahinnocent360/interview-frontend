import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './cube.css'
import {getCubes, createCube } from '../../../app/reducers/circleSlice'
import { faArrowAltCircleLeft, faCube } from '@fortawesome/free-solid-svg-icons'
export default function Cube() {
  const { cubes } = useSelector((store) => store.allcircles)
  const [data1, setHeight] = useState()
  const [data2, setWidth] = useState()
  const [name, setName] = useState()
  const [units, setUnits] = useState() 
  const height = Number(data1)
  const width = Number(data2)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCubes(cubes))
  }, [dispatch])
 const newCube = (e) =>{
  e.preventDefault()
  dispatch(createCube({
    height,
    name,
    width,
    units
  })).then(() => {
    window.location.reload()
  })
 }
  return (
<div className='cube'>
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
        <button className='inputs others' onClick={newCube}>Submit</button>
      </form>
      <div action="" className='result'>
          {cubes?.map((cube) => (
            <Link to={`/playground/cube/${cube.id}`} className='result-cat' key={cube.id}>
              <FontAwesomeIcon className='awesome' title='click me' size='7x' color='#db3400' icon={faCube}></FontAwesomeIcon>
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
