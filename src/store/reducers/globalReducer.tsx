import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IGlobal = {
    page: number,
    nums: number[],
}

const initialState: IGlobal ={
    page: 1,
    nums: [1,2,3,4,5],
}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
        setPage(state, action: PayloadAction<number>){
            state.page = action.payload
        },
        setNums(state, action: PayloadAction<number[]>){
            state.nums = action.payload
        }
    }
})

export const { setPage, setNums } = globalSlice.actions;
export default globalSlice.reducer;