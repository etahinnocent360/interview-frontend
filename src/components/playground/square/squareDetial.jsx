import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteSquare, getSingleSquare } from '../../../app/reducers/circleSlice'
import { faArrowAltCircleLeft, faSquare } from '@fortawesome/free-solid-svg-icons'
import Square from './square'
import './square.css'
import axios from 'axios'
import { baseURL } from '../../../base/config'
import { faTrash } from '@fortawesome/sharp-solid-svg-icons'
export default function SquareDetail() {
    const [option, setOption] = useState()
    const [data2, setWidth] = useState()
    const [data1, setHeight] = useState()
    const [name, setName] = useState()
    const [units, setUnits] = useState()
    const dispatch = useDispatch()
    const {square} = useSelector((store) =>store.allcircles)
    const width = Number(data2)
    const height = Number(data1)
    console.log(square,'ddsdsd')
    const {id} = useParams()
    useEffect(() =>{
        dispatch(getSingleSquare(id))
    },[id])
    const handleDelete = (() => {
        dispatch(deleteSquare(id)).then(() => {
            window.location.replace('/playground/square')
        })
    })
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`${baseURL}/square/${id}`, {
            width,
            height,
            name,
            units
        })
    }

if(option === 'perimeter'){
    return(
        <div className='square'>   
              <div className="top">
          <div className="left">
            <h5>Your Answer</h5>
            <input className='answer' type="text" value={square.perimeter} />
            <span>{square.units}</span>
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
                <p className='shift'>The square with height {square?.height}{Square?.units} and {square?.width}{Square?.units} has perimeter {square?.perimeter}{square.units}</p>
                <FontAwesomeIcon size='7x' className='shift' color='#f39a00' icon={faSquare}/>
                <p className='shift'>height = {square.height}</p>
                <p className='shift'>width = {square.width}</p>
            </div>
            <div className="cards card3">
                <p className='shift'>The formular below was used to calculate the perimeter</p>
                <p className='shift'>perimeter = 4 * height</p>
            </div>
            <div className="cards card3">
                <p className='shift'>replace height and width thier respective values</p>
                <p className='shift'> perimeter = 4 * height</p>
                <p className='shift'>  =4 * {square.height}{square.units}</p>
                <p className='shift'> answer = {square.area}{square.units}</p>
            </div>
            <form action="" className='form detail'>
    <input className='inputs numbers' value={data1} placeholder='Enter the hieght eg 47' type="number" onChange={(e) => setHeight(e.target.value)} />
        <input className='inputs numbers' value={data2} placeholder='Enter the sideB eg 47' type="number" onChange={(e) => setWidth(e.target.value)} />
        <select value={name} className='inputs others' name="" id="" onChange={(e) => setName(e.target.value)}>
        <option >perimeter</option>
          <option >area</option>
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
      <Link to={'/playground/square'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
            </div>
    )
}


    return (
        <div className='square'>   
              <div className="top">
          <div className="left">
            <h5>Your Answer</h5>
            <input className='answer' type="text" value={square.area} />
            <span>{square.units}^2</span>
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
                <p className='shift'>The square with height {square?.height}{Square?.units} and {square?.width}{Square?.units} has area {square?.area}{square.units}^2</p>
                <FontAwesomeIcon size='7x' className='shift' color='#f39a00' icon={faSquare}/>
                <p className='shift'>height = {square.height}</p>
                <p className='shift'>width = {square.width}</p>
            </div>
            <div className="cards card3">
                <p className='shift'>The formular below was used to calculate the area</p>
                <p className='shift'>area = height * width</p>
            </div>
            <div className="cards card3">
                <p className='shift'>replace height and width thier respective values</p>
                <p className='shift'> area = height * width</p>
                <p className='shift'>  = {square.height}{square.units} * {square.width}{square.units}</p>
                <p className='shift'> answer = {square.area}{square.units}^2</p>
            </div>
            <form action="" className='form detail'>
    <input className='inputs numbers' value={data1} placeholder='Enter the hieght eg 47' type="number" onChange={(e) => setHeight(e.target.value)} />
        <input className='inputs numbers' value={data2} placeholder='Enter the sideB eg 47' type="number" onChange={(e) => setWidth(e.target.value)} />
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
      <Link to={'/playground/square'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
            </div>
    )
}
