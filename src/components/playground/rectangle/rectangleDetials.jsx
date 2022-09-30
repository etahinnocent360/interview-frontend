import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteRectangle, getSingleRectangle } from '../../../app/reducers/circleSlice'
import './rectangle.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { baseURL } from '../../../base/config'
import { faRectangle, faTrash } from '@fortawesome/sharp-solid-svg-icons'
import Loading from '../../../loader/loarding'
export default function RectangleDetails() {
    const [option, setOption] = useState()
    const [data2, setWidth] = useState()
    const [data1, setHeight] = useState()
    const [name, setName] = useState()
    const [units, setUnits] = useState()
    const dispatch = useDispatch()
    const { rectangle, isLoading } = useSelector((store) => store.allcircles)
    const width = Number(data2)
    const height = Number(data1)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getSingleRectangle(id))
         // eslint-disable-next-line
    }, [id])
    const handleDelete = (() => {
        dispatch(deleteRectangle(id)).then(() => {
            window.location.replace('/playground/rectangle')
        })
    })
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`${baseURL}/rectangle/${id}`, {
            width,
            height,
            name,
            units
        }).then(() => {
            window.location.reload()
        })
    }
    if(isLoading){
        return <Loading/>
    }

    if (option === 'perimeter') {
        return (
            <div className='rectangle'>
                <div className="top">
                    <div className="left">
                        <h5>Your Answer</h5>
                        <input className='answer' type="text" value={rectangle.perimeter} />
                        <span>{rectangle.units}</span>
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
                    <p className='shift'>The rectangle with height {rectangle?.height}{rectangle?.units} and {rectangle?.width}{rectangle?.units} has perimeter {rectangle?.perimeter}{rectangle.units}</p>
                    <FontAwesomeIcon size='7x' className='shift' color='#9900ab' icon={faRectangle} />
                    <p className='shift'>height = {rectangle.height}</p>
                    <p className='shift'>width = {rectangle.width}</p>
                </div>
                <div className="cards card3">
                    <p className='shift'>The formular below was used to calculate the perimeter</p>
                    <p className='shift'>perimeter = 2(width + height)</p>
                </div>
                <div className="cards card3">
                    <p className='shift'>replace height and width thier respective values</p>
                    <p className='shift'> perimeter = 2(width + height)</p>
                    <p className='shift'>  =2({rectangle.height}{rectangle.units} + {rectangle.width}{rectangle.units})</p>
                    <p className='shift'> answer = {rectangle.perimeter}{rectangle.units}</p>
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
                    <FontAwesomeIcon className='trash' onClick={handleDelete} icon={faTrash} title='delete solution' />
                </form>
                <Link to={'/playground/rectangle'}>
                    <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft} />
                </Link>
            </div>
        )
    }


    return (
        <div className='rectangle'>
            <div className="top">
                <div className="left">
                    <h5>Your Answer</h5>
                    <input className='answer' type="text" value={rectangle.area} />
                    <span>{rectangle.units}^2</span>
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
                <p className='shift'>The rectangle with height {rectangle?.height}{rectangle?.units} and {rectangle?.width}{rectangle?.units} has area {rectangle?.area}{rectangle.units}^2</p>
                <FontAwesomeIcon size='7x' className='shift' color='#9900ab' icon={faRectangle} />
                <p className='shift'>height = {rectangle.height}</p>
                <p className='shift'>width = {rectangle.width}</p>
            </div>
            <div className="cards card3">
                <p className='shift'>The formular below was used to calculate the area</p>
                <p className='shift'>area = height * width</p>
            </div>
            <div className="cards card3">
                <p className='shift'>replace height and width thier respective values</p>
                <p className='shift'> area = height * width</p>
                <p className='shift'>  = {rectangle.height}{rectangle.units} * {rectangle.width}{rectangle.units}</p>
                <p className='shift'> answer = {rectangle.area}{rectangle.units}^2</p>
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
                <FontAwesomeIcon className='trash' onClick={handleDelete} icon={faTrash} title='delete solution' />
            </form>
            <Link to={'/playground/rectangle'}>
                <FontAwesomeIcon className='back-arrow' icon={faArrowAltCircleLeft} />
            </Link>
        </div>
    )
}

