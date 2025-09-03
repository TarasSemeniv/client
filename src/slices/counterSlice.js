import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialValues,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decriment: (state) => {
            state.value -= 1;
        },
        amountBy: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decriment, amountBy } = counterSlice.actions;
export default counterSlice.reducer;
 