import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangle } from '@fortawesome/sharp-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createTriangle, getSquare, getTriangles } from '../../../app/reducers/circleSlice'

export default function Triangle() {
    const { triangles} = useSelector((store) => store.allcircles)
    const [data1, setHeight] = useState()
    const [data2, setBase] = useState()
    const [data3, setSideA] = useState()
    const [data4, setSideB] = useState()
    const [name, setName] = useState()
    const [units, setUnits] = useState() 
    const height = Number(data1)
    const base = Number(data2)
    const sideA = Number(data3)
    const sideB = Number(data4)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTriangles(triangles))
      }, [dispatch])
    const newTriangle = (e) =>{
        e.preventDefault()
        dispatch(createTriangle({
          height,
          name,
          base,
          units,
          sideA,
          sideB
        })).then(() => {
          window.location.reload()
        })
       }
  return (
    <div className='triangle'>
<div className='create'>
      <form action="" className='form'>
        <input className='inputs numbers' value={data1} placeholder='Enter the hieght eg 47' type="number" onChange={(e) => setHeight(e.target.value)} />
        <input className='inputs numbers' value={data2} placeholder='Enter the base eg 47' type="number" onChange={(e) => setBase(e.target.value)} />
        <input className='inputs numbers' value={data3} placeholder='Enter the sideA eg 47' type="number" onChange={(e) => setSideA(e.target.value)} />
        <input className='inputs numbers' value={data4} placeholder='Enter the sideB eg 47' type="number" onChange={(e) => setSideB(e.target.value)} />
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
        <button className='inputs others' onClick={newTriangle}>Submit</button>
      </form>
      <div action="" className='result'>
          {triangles?.map((triangle) => (
            <Link to={`/playground/triangle/${triangle.id}`} className='result-cat' key={triangle.id}>
              <FontAwesomeIcon className='awesome' title='click me' size='7x' color='#009fba' icon={faTriangle}></FontAwesomeIcon>
            </Link>
          ))}
        
      </div>
    </div>
</div>
  )
}
