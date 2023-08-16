import { configureStore } from "@reduxjs/toolkit";
import Quizreducer from './Slicer'
export const Store = configureStore({
    reducer:{
        quiz: Quizreducer,
    }
})

