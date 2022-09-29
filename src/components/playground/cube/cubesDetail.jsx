import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteCube, getSingleCube } from '../../../app/reducers/circleSlice'
import './cube.css'
import axios from 'axios'
import { baseURL } from '../../../base/config'
import {faTrash, faArrowAltCircleLeft } from '@fortawesome/sharp-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../../loader/loarding'


export default function CubeDetail() {
    const [option, setOption] = useState()
    const [data2, setWidth] = useState()
    const [data1, setHeight] = useState()
    const [name, setName] = useState()
    const [units, setUnits] = useState()
    const dispatch = useDispatch()
    const {cube, isLoading} = useSelector((store) =>store.allcircles)
    const width = Number(data2)
    const height = Number(data1)
    const {id} = useParams()
    useEffect(() =>{
        dispatch(getSingleCube(id))
    },[id])
    const handleDelete = (() => {
        dispatch(deleteCube(id)).then(() => {
            window.location.replace('/playground/cubes')
        })
    })
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`${baseURL}/cube/${id}`, {
            width,
            height,
            name,
            units
        }).then(() =>{
            window.location.reload()
        })
    }
if(isLoading){
  return <Loading/>
}
if(option === 'perimeter'){
    return(
        <div className='cube'>   
              <div className="top">
          <div className="left">
            <h5>Your Answer</h5>
            <input className='answer' type="text" value={cube.perimeter} />
            <span>{cube.units}</span>
            <h4 style={{color:'#db3400'}}>Explanation</h4>
          </div>
          <div className="right">
            <select value={option} className='answer select' onChange={(e) => setOption(e.target.value)}>
              <option >area</option>
              <option >perimeter</option>
            </select>
          </div>
        </div>

            <div className="cards card3">
                <p className='shift'>The cube with height {cube?.height}{cube?.units} and {cube?.width}{cube?.units} has perimeter {cube?.perimeter}{cube.units}</p>
                <FontAwesomeIcon size='7x' className='shift' color='#db3400' icon={faCube}/>
                <p className='shift'>height = {cube.height}</p>
                <p className='shift'>width = {cube.width}</p>
            </div>
            <div className="cards card3">
                <p className='shift'>The formular below was used to calculate the perimeter</p>
                <p className='shift'>perimeter = 12(height)</p>
            </div>
            <div className="cards card3">
                <p className='shift'>replace height and width thier respective values</p>
                <p className='shift'> perimeter = 12(height)</p>
                <p className='shift'>  =12({cube.height}{cube.units})</p>
                <p className='shift'> answer = {cube.perimeter}{cube.units}</p>
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
      <Link to={'/playground/cubes'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
            </div>
    )
}


    return (
        <div className='cube'>   
              <div className="top">
          <div className="left">
            <h5>Your Answer</h5>
            <input className='answer' type="text" value={cube.area} />
            <span>{cube.units}^2</span>
            <h4 style={{color:'#db3400'}}>Explanation</h4>
          </div>
          <div className="right">
            <select value={option} className='answer select' onChange={(e) => setOption(e.target.value)}>
              <option >area</option>
              <option >perimeter</option>
            </select>
          </div>
        </div>

            <div className="cards card3">
                <p className='shift'>The cube with height {cube?.height}{cube?.units} and {cube?.width}{cube?.units} has area {cube?.area}{cube.units}^2</p>
                <FontAwesomeIcon size='7x' className='shift' color='#db3400' icon={faCube}/>
                <p className='shift'>height = {cube.height}</p>
                <p className='shift'>width = {cube.width}</p>
            </div>
            <div className="cards card3">
                <p className='shift'>The formular below was used to calculate the area</p>
                <p className='shift'>area =6(height * width)</p>
            </div>
            <div className="cards card3">
                <p className='shift'>replace height and width thier respective values</p>
                <p className='shift'> area = 6(height * width)</p>
                <p className='shift'>  = 6({cube.height}{cube.units} * {cube.width}{cube.units})</p>
                <p className='shift'> answer = {cube.area}{cube.units}^2</p>
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
     <Link to={'/playground/cubes'}>
     <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft}/>
     </Link>
            </div>
    )
}

