import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: {
        cardData : null,
    },
    reducers: {
        addCardData: (state, action) => {
            state.cardData = action.payload
        },
    }
})

export const { addCardData } = cardSlice.actions;
export default cardSlice.reducer;