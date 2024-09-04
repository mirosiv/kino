import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import filmsService from "../services/filmsService";
import { IFilm } from "../../interfaces/IFilm";

type filmsState = {
  total: number;
  totalPages: number;
  items: IFilm[];
  sortedItems: IFilm[];
  itemsByPage: IFilm[]
};

const initialState: filmsState = {
  total: 0,
  totalPages: 0,
  items: [],
  sortedItems: [],
  itemsByPage:[]
};

export const fetchFilmsByPage = createAsyncThunk(
  "films/fetchFilms",
  async (page: number, thunkAPI) => {
    try {
      const response = await filmsService.fetchFilms(page);
      return response.data;
    } catch (error) {
      const message = "error confused";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setSortedFilms(state, action: PayloadAction<filmsState>) {
        state.sortedItems = action.payload.sortedItems;
        state.items = action.payload.items;
    },
    setFilms(state, action: PayloadAction<filmsState>) {
        state.items = action.payload.items;
  },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFilmsByPage.fulfilled,
      (state, action: PayloadAction<filmsState>) => {
        state.totalPages = action.payload.totalPages;
        state.itemsByPage = action.payload.items;
        state.total = action.payload.total;
      }
    );
  },
});

export const { setSortedFilms, setFilms} = filmsSlice.actions;
export default filmsSlice.reducer;
