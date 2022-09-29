import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPi, faTrash, faTriangle } from '@fortawesome/sharp-solid-svg-icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteTriangle, getSingleTriangle } from '../../../app/reducers/circleSlice'
import { baseURL } from '../../../base/config'
import Loading from '../../../loader/loarding'
import './triangle.css'
export default function TriangleDetail() {
  const { triangle, isLoading } = useSelector((store) => store.allcircles)
  const [option, setOption] = useState()
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
  console.log(triangle)
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleTriangle(id))
  }, [id])
  const handleDelete = () => {
    dispatch(deleteTriangle(id)).then(() =>{
      window.location.replace('/playground/triangles')
    })
  }

  const handleUpdate = (e) =>{
    e.preventDefault()
    axios.put(`${baseURL}/triangle/${id}`, {sideA, sideB, height, base, units, name}).then((response) =>{
      window.location.reload()
      return response.data
    })
  }
  if(isLoading){
    return <Loading/>
  }
  if (option === 'perimeter') {
    return (
      <div className='triangle'>
        <div className="top">
          <div className="left">
            <h2 style={{padding:'20px', marginLeft:'-28px'}}>Education is fun</h2>
            <input className='answer' type="text" value={triangle?.perimeter} />
            <span>{triangle.units}</span>
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
          <p style={{ marginLeft: '30px' }} className='new'>The triangle with sideA {triangle.sideA}{triangle.units}, sideB {triangle.sideB}{triangle.units}, and base {triangle.base}{triangle.units} has perimeter {triangle.perimeter}{triangle.units}</p>
          <FontAwesomeIcon style={{ marginLeft: '30px' }} icon={faTriangle} color='#009fba' size="6x" />
          <div style={{ marginLeft: '30px', marginTop: '5px' }}>
            <p style={{ display: 'inline-block' }}>sideA</p>
            <span> is = {triangle.sideA}</span>
          </div>
          <div style={{ marginLeft: '30px', marginTop: '5px' }}>
            <p style={{ display: 'inline-block' }}>sideB</p>
            <span> is = {triangle.sideB}</span>
          </div>
          <div style={{ marginLeft: '30px', marginTop: '-20px' }}>
            <p style={{ display: 'inline-block' }}>base</p>
            <span> is = {triangle.base}</span>
          </div>
        </div>
        <div className="cards card3">
          <p style={{ marginLeft: '30px' }}>This formular was used to fined the area from the radius</p>
          <span style={{ marginLeft: '30px' }}>Perimeter = </span>
         <span>sideA + sideB + base</span>
        </div>
        <div className="cards card3 cards3a">
          <p>repalce sideA, sideB and base with thier respective values</p>
          <p style={{ marginLeft: '30px' }}>= {triangle.sideA} + {triangle.sideB} + {triangle.base} </p>
          <p style={{ marginLeft: '30px' }}>= {triangle.perimeter}</p>
          <p style={{ marginLeft: '30px' }}>the perimeter is {triangle.perimeter}{triangle.unit}</p>
        </div>
        <form action="" className='form detail'>
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
          <button className='inputs others' onClick={handleUpdate}>Update</button>
        <FontAwesomeIcon className='trash' onClick={handleDelete} icon={faTrash} title='delete solution'/>
      </form>
      <Link to={'/playground/triangles'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
      </div>
    )
  }
  return (
    <div className='triangle'>
    <div className="top">
      <div className="left">
        <h2 style={{padding:'20px', marginLeft:'-28px'}}>Education is fun</h2>
        <input className='answer' type="text" value={triangle?.area} />
        <span>{triangle.units}</span>
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
      <p style={{ marginLeft: '30px' }} className='new'>The triangle with height {triangle.height}{triangle.units} and base {triangle.base}{triangle.units} has area {triangle.area}{triangle.units}</p>
      <FontAwesomeIcon style={{ marginLeft: '30px' }} icon={faTriangle} color='#009fba' size="6x" />
      <div style={{ marginLeft: '30px', marginTop: '5px' }}>
        <p style={{ display: 'inline-block' }}>height</p>
        <span> is = {triangle.height}</span>
      </div>
      <div style={{ marginLeft: '30px', marginTop: '-20px' }}>
        <p style={{ display: 'inline-block' }}>base</p>
        <span> is = {triangle.base}</span>
      </div>
    </div>
    <div className="cards card3">
      <p style={{ marginLeft: '30px' }}>This formular was used to fined the area from the radius</p>
      <span style={{ marginLeft: '30px' }}>height = </span>
     <span>1/2base*height</span>
    </div>
    <div className="cards card3 cards3a">
    <p style={{ marginLeft: '30px' }}>= replace height and width with thier values</p>
      <p style={{ marginLeft: '30px' }}>= 1/2*{triangle.base}*{triangle.height} </p>
      <p style={{ marginLeft: '30px' }}>= {triangle.area}</p>
      <p style={{ marginLeft: '30px' }}>the perimeter is {triangle.area}{triangle.units}</p>
    </div>
    <form action="" className='form detail'>
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
          <button className='inputs others' onClick={handleUpdate}>Update</button>
        <FontAwesomeIcon className='trash' onClick={handleDelete} icon={faTrash} title='delete solution'/>
      </form>  
      <Link to={'/playground/triangles'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
  </div>
  )
}
