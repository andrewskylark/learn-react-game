import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {},
    isLoading: false,
    data: null,
    error: ''
};

export const cardsSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        like: (state, action) => {
            state.cards[action.payload] = !state.cards[action.payload];     
        },
        fetchCharacters: (state) => {
            state.isLoading = true;
        },
        fetchCharactersResolve: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = '';
        },
        fetchCharactersReject: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
})

export const { like, fetchCharacters, fetchCharactersResolve, fetchCharactersReject } = cardsSlice.actions;

export const cardsIdCardSelector = (state) => state.card.cards;
export const cardsIsLoadingSelector = (state) => state.card.isLoading;
export const cardsDataSelector = (state) => state.card.data;
export const cardsErrorSelector = (state) => state.card.error;

export const fetchCharactersAsync = () => async (dispatch) => {
    dispatch(fetchCharacters());
    try {
        const result = await fetch('http://localhost:4000/characters').then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        });
        dispatch(fetchCharactersResolve(result));
        console.log(result);
        dispatch(fetchCharactersReject(''));
    } catch (err) {
        dispatch(fetchCharactersReject(err));
    }
}

export default cardsSlice.reducer;