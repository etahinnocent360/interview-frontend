import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../base/config";


const circleSlice = createSlice({
    name: "allcircles",
    initialState: {
        square:{},
        squares:[],
        circle: {},
        circles: [],
        isLoading: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getCircles.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getCircles.fulfilled, (state, action) => {
                state.circles = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getCircles.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })

        builder.addCase(getSingleCircle.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getSingleCircle.fulfilled, (state, action) => {
                state.circle = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getSingleCircle.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })

            //squares
            builder.addCase(getSquare.pending, (state, action) => {
                state.isLoading = true
                state.hasError = false
            })
                .addCase(getSquare.fulfilled, (state, action) => {
                    state.circles = action.payload;
                    state.isLoading = false;
                    state.hasError = false
                })
                .addCase(getSquare.rejected, (state, action) => {
                    state.hasError = true
                    state.isLoading = false;
                })
    

            
    }
    
})
export const getCircles = createAsyncThunk(
    'circle/circles',
    async () => {
        try {
            const newResponse = axios.get(`${baseURL}/circle/circles`)
            return (await newResponse).data
        } catch (error) {

        }
    }
)
export const getSingleCircle = createAsyncThunk(
    'circle/:id',
    async (id) => {
        try {
            const newResponse = axios.get(`${baseURL}/circle/${id}`)
            console.log((await newResponse).data, 'square data')
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)
export const createCircle = createAsyncThunk(
    '/circle',
    async (data) => {
        try {
            const newResponse = (await axios.post(`${baseURL}/circle`, data))
            console.log(data, 'is')
            console.log(newResponse.data, 'data')
            return newResponse.data
        } catch (error) {

        }
    }
)
export const deleteCircle = createAsyncThunk(
    'circle/:id',
    async (id) => {
        try {
            const newResponse = axios.delete(`${baseURL}/circle/${id}`)
            console.log((await newResponse).data)
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)

// for square slices
export const getSquare = createAsyncThunk(
    'square/squares',
    async () => {
        try {
            const newResponse = axios.get(`${baseURL}/square/squares`)
            return (await newResponse).data
        } catch (error) {

        }
    }
)
export const getSingleSquare = createAsyncThunk(
    'square/:id',
    async (id) => {
        try {
            const newResponse = axios.get(`${baseURL}/square/${id}`)
            console.log((await newResponse).data)
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)
export const createSquare = createAsyncThunk(
    '/square',
    async (data) => {
        try {
            const newResponse = (await axios.post(`${baseURL}/square`, data))
            console.log(data, 'is')
            console.log(newResponse.data, 'data')
            return newResponse.data
        } catch (error) {

        }
    }
)
export const deleteSquare = createAsyncThunk(
    'square/:id',
    async (id) => {
        try {
            const newResponse = axios.delete(`${baseURL}/square/${id}`)
            console.log((await newResponse).data)
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)
// for cube slices
export const getCubes = createAsyncThunk(
    'cube/cubes',
    async () => {
        try {
            const newResponse = axios.get(`${baseURL}/cube/cubes`)
            return (await newResponse).data
        } catch (error) {

        }
    }
)
export const getSingleCube = createAsyncThunk(
    'cube/:id',
    async (id) => {
        try {
            const newResponse = axios.get(`${baseURL}/cube/${id}`)
            console.log((await newResponse).data)
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)
export const createCube = createAsyncThunk(
    '/cube',
    async (data) => {
        try {
            const newResponse = (await axios.post(`${baseURL}/cube`, data))
            console.log(data,'is')
            console.log(newResponse.data,'data')
            return newResponse.data
        } catch (error) {

        }
    }
)
export const deleteCube = createAsyncThunk(
    'cube/:id',
    async (id) => {
        try {
            const newResponse = axios.delete(`${baseURL}/cube/${id}`)
            console.log((await newResponse).data)
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)

// for triangle slices
export const getTriangles = createAsyncThunk(
    'triangle/triangles',
    async () => {
        try {
            const newResponse = axios.get(`${baseURL}/triangle/triangles`)
            return (await newResponse).data
        } catch (error) {

        }
    }
)
export const getSingleTriangle = createAsyncThunk(
    'triangle/:id',
    async (id) => {
        try {
            const newResponse = axios.get(`${baseURL}/triangle/${id}`)
            console.log((await newResponse).data)
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)
export const createTriangle = createAsyncThunk(
    '/triangle',
    async (data) => {
        try {
            const newResponse = (await axios.post(`${baseURL}/triangle`, data))
            console.log(data,'is')
            console.log(newResponse.data,'data')
            return newResponse.data
        } catch (error) {

        }
    }
)
export const deleteTriangle = createAsyncThunk(
    'triangle/:id',
    async (id) => {
        try {
            const newResponse = axios.delete(`${baseURL}/triangle/${id}`)
            console.log((await newResponse).data)
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)

export default circleSlice.reducer