import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
    name: 'lang',
    initialState: {
        value: 'fr-FR',
    },
    reducers: {
        switchLanguage: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { switchLanguage } = langSlice.actions;
export default langSlice.reducer;
