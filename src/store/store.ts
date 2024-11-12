import {configureStore} from '@reduxjs/toolkit';
import JourneySlice from './slice.tsx';
export const store=configureStore({
    reducer:{
        journey:JourneySlice
    }
})

export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch