import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../base/config";


const squareSlice = createSlice({
    name: "allsquares",
    initialState: {
        square:{},
        squares: [],
        loading: false,
        Error: false
    },
    extraReducers: (builder) => {
        builder.addCase(getSquare.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getSingleSquare.fulfilled, (state, action) => {
                state.square = action.payload;
                state.loading = false;
                state.Error = false
            })
            .addCase(getSquare.rejected, (state, action) => {
                state.Error = true
                state.loading = false;
            })

            builder.addCase(getSingleSquare.pending, (state, action) => {
                state.loading = true
                state.Error = false
            })
                .addCase(getSingleSquare.fulfilled, (state, action) => {
                    state.square = action.payload;
                    state.loading = false;
                    state.Error = false
                })
                .addCase(getSingleSquare.rejected, (state, action) => {
                    state.Error = true
                    state.loading = false;
                })
    }
})
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

export default squareSlice.reducer