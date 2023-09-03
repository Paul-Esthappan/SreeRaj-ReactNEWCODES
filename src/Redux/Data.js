import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'data',
    initialState: {
        info:[]
    },
    reducers: {
        dataInfo: (state, action) => {
            console.log("Axios data ----",action.payload)
            state.info.push(action.payload)
        }
    }
})
export const { dataInfo } = user.actions
export default user.reducer