import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = await axios.get('https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple')

const initvalue={
    quiz: data.data.results,
    selectedAnswer:"",
    currentQ:0,
    Degree:0,


}

const Qslice = createSlice({
    name:'Questions',
    initialState:initvalue,
    reducers:{
        NextQ: (state) => { 
            if (state.currentQ < 20 ){
                state.currentQ = state.currentQ + 1
            }else{
                 state.currentQ = 0

            } },
        ChangeSelectedAnswer:(state,answer_) => {
            
            state.selectedAnswer = `${answer_.payload[0]}`
            
        },
        IncDegree:(state)=>{
            state.Degree = state.Degree+1
        }
      

    }
   
})
export const { NextQ, ChangeSelectedAnswer, IncDegree  } = Qslice.actions
export default Qslice.reducer