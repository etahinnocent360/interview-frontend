import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Circle from './circle/circle'
import CircleDetails from './circle/circleDetail'
import Cube from './cube/cube'
import CubesDetail from './cube/cubesDetail'
import PlayLanding from './playground'
import Rectangle from './rectangle/rectangle'
import RectangleDetails from './rectangle/rectangleDetials'
import Square from './square/square'
import SquareDetail from './square/squareDetial'
import Triangle from './triangle/triangle'
import TriangleDetail from './triangle/triangleDetails'

export default function IndexPlayground() {
  return (
    <div>
        <Routes>
            <Route path='/circles' element={<Circle/>}/>
            <Route path='/circle/:id' element={<CircleDetails/>}/>
            <Route path='/rectangle' element={<Rectangle/>}/>
            <Route path='/square' element={<Square/>}/>
            <Route path='/rectangles/:id' element={<RectangleDetails/>}/>
            <Route path='/cube/:id' element={<CubesDetail/>}/>
            <Route path='/cubes' element={<Cube/>}/>
            <Route path='/' element={<PlayLanding/>}/>
            <Route path="/triangle/:id" element={<TriangleDetail/>}/>
            <Route path='/squares/:id' element={<SquareDetail/>}/>
            <Route path='/triangles' element={<Triangle/>}/>
        </Routes>
    </div>
  )
}
