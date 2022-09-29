import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/sharp-solid-svg-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSquare } from '../../../app/reducers/circleSlice'
export default function Square() {
  const { squares, isLoading} = useSelector((store) => store.allcircles)
  const dispatch = useDispatch()
console.log(squares,'form component')
  useEffect(() => {
    dispatch(getSquare(squares))
  }, [dispatch])
  return (
<div className='new-square'>
<div className='create'>
      <form action="" className='form'>
        <input className='inputs numbers' placeholder='Enter the hieght eg 47' type="number" />
        <input className='inputs numbers' placeholder='Enter the width eg 47' type="number" />
        <select className='inputs others' name="" id="">
          <option value="">Area</option>
          <option value="">Perimeter</option>
        </select>
        <button className='inputs others' onClick={(e) => e.preventDefault}>Submit</button>
      </form>
      <div action="" className='result'>
          {squares?.map((square) => (
            <Link to={`/playground/squres/${square.id}`} className='result-cat' key={square.id}>
              <FontAwesomeIcon className='awesome' title='click me' size='7x' color='#00c31a4b' icon={faSquare}></FontAwesomeIcon>
            </Link>
          ))}
        
      </div>
    </div>
</div>
  )
}
