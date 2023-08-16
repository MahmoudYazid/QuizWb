import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NextQ } from '../Store/Slicer'

export default function Timer() {
    const [TimerCounter,setTimerCounter]=useState(0)

    const dispatch = useDispatch()
    const SelectedAnswer = useSelector((state) => state.quiz.selectedAnswer)
    setTimeout(()=>{
        setTimerCounter(TimerCounter+1)
        if (TimerCounter >=60 ){
            setTimerCounter(0)
            dispatch(NextQ())

        }
        if (SelectedAnswer.length > 0) {
            setTimerCounter(0)
            

        }


    },1000)
    
  return (
    <div>
          <div className='DegreeContainer'> Timer  : {TimerCounter}   </div>
    </div>
  )
}
