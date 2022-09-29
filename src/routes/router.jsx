import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import IndexPlayground from "../components/playground";
import Circle from "../components/playground/circle/circle";
import CircleDetails from "../components/playground/circle/circleDetail";
import Cube from "../components/playground/cube/cube";
import CubesDetail from "../components/playground/cube/cubesDetail";
import PlayLanding from "../components/playground/playground";
import Rectangle from "../components/playground/rectangle/rectangle";
import RectangleDetails from "../components/playground/rectangle/rectangleDetials";
import Square from "../components/playground/square/square";
import SquareDetail from "../components/playground/square/squareDetial";
import Triangle from "../components/playground/triangle/triangle";
import TriangleDetail from "../components/playground/triangle/triangleDetails";


export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/playground" element={<IndexPlayground />}>
                    <Route path="/playground/circles" element={<Circle />} />
                    <Route path="/playground/circle/:id" element={<CircleDetails />} />
                    <Route path="/playground/rectangle" element={<Rectangle />} />
                    <Route path="/playground/rectangles/:id" element={<RectangleDetails/>} />
                    <Route path="/playground/" element={<PlayLanding />} />
                    <Route path="/playground/squares/:id" element={<SquareDetail/>}/>
                    <Route path="/playground/cube/:id" element={<CubesDetail/>}/>
                    <Route path="/playground/square" element={<Square/>}/>
                    <Route path="/playground/cubes" element={<Cube/>}/>
                    <Route path="/playground/triangle/:id" element={<TriangleDetail/>}/>
                    <Route path="/playground/triangles" element={<Triangle/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}