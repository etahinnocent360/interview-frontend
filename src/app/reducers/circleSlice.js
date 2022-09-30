import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../base/config";


const circleSlice = createSlice({
    name: "allcircles",
    initialState: {
        rectangle: {},
        rectangles: [],
        cube: {},
        cubes: [],
        triangle: {},
        triangles: [],
        square: {},
        squares: [],
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
                state.squares = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getSquare.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })

        builder.addCase(getSingleSquare.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getSingleSquare.fulfilled, (state, action) => {
                state.square = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getSingleSquare.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })
        // for triangles
        builder.addCase(getTriangles.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getTriangles.fulfilled, (state, action) => {
                state.triangles = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getTriangles.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })
        builder.addCase(getSingleTriangle.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getSingleTriangle.fulfilled, (state, action) => {
                state.triangle = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getSingleTriangle.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })


        // for rectangles

        builder.addCase(getRectangles.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getRectangles.fulfilled, (state, action) => {
                state.rectangles = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getRectangles.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })
        builder.addCase(getSingleRectangle.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getSingleRectangle.fulfilled, (state, action) => {
                state.rectangle = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getSingleRectangle.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })


        // for cubes

        builder.addCase(getCubes.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getCubes.fulfilled, (state, action) => {
                state.cubes = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getCubes.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })
        builder.addCase(getSingleCube.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
            .addCase(getSingleCube.fulfilled, (state, action) => {
                state.cube = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getSingleCube.rejected, (state, action) => {
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
            throw new error(error)
        }
    }
)
export const getSingleCircle = createAsyncThunk(
    'circle/:id',
    async (id) => {
        try {
            const newResponse = axios.get(`${baseURL}/circle/${id}`)
            return (await newResponse).data
        } catch (error) {
            throw new error(error)
        }
    }
)
export const createCircle = createAsyncThunk(
    '/circle',
    async (data) => {
        try {
            const newResponse = (await axios.post(`${baseURL}/circle`, data))
            return newResponse.data
        } catch (error) {
            throw new error(error)
        }
    }
)
export const deleteCircle = createAsyncThunk(
    'circle/:id',
    async (id) => {
        try {
            const newResponse = axios.delete(`${baseURL}/circle/${id}`)
            return (await newResponse).data
        } catch (error) {
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
            throw new error(error)
        }
    }
)
export const getSingleSquare = createAsyncThunk(
    'square/:id',
    async (id) => {
        try {
            const newResponse = axios.get(`${baseURL}/square/${id}`)
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
            return newResponse
        } catch (error) {
            throw new error(error)
        }
    }
)
export const deleteSquare = createAsyncThunk(
    'square/:id',
    async (id) => {
        try {
            const newResponse = axios.delete(`${baseURL}/square/${id}`)
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
            throw new error(error)
        }
    }
)
export const getSingleTriangle = createAsyncThunk(
    'triangle/:id',
    async (id) => {
        try {
            const newResponse = axios.get(`${baseURL}/triangle/${id}`)
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
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)


//rectangle slices

export const getRectangles = createAsyncThunk(
    'rectangle/rectangles',
    async () => {
        try {
            const newResponse = axios.get(`${baseURL}/rectangle/rectangles`)
            return (await newResponse).data
        } catch (error) {
            throw new error(error)
        }
    }
)
export const getSingleRectangle = createAsyncThunk(
    'rectangle/:id',
    async (id) => {
        try {
            const newResponse = axios.get(`${baseURL}/rectangle/${id}`)
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)
export const createRectangle = createAsyncThunk(
    '/rectangle',
    async (data) => {
        try {
            const newResponse = (await axios.post(`${baseURL}/rectangle`, data))
            return newResponse.data
        } catch (error) {
            throw new error(error)
        }
    }
)
export const deleteRectangle = createAsyncThunk(
    'rectangle/:id',
    async (id) => {
        try {
            const newResponse = axios.delete(`${baseURL}/rectangle/${id}`)
            return (await newResponse).data
        } catch (error) {
            console.log(error)
            throw new error(error)
        }
    }
)

export default circleSlice.reducer