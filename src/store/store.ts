import { configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./reducers/filmsReducer";
import globalReducer from "./reducers/globalReducer";

export const store = configureStore({
        reducer: {
            film: filmsReducer,
            global: globalReducer,
    }})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;