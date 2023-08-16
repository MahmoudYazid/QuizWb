import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './QuizPage.css'
import { ChangeSelectedAnswer, IncDegree, NextQ } from '../Store/Slicer'
import Timer from './Timer'


export default function QuizPage() {
    const data = useSelector((state) => state.quiz.quiz)
    const currentQ = useSelector((state) => state.quiz.currentQ)
    const SelectedAnswer = useSelector((state) => state.quiz.selectedAnswer)
    const Degree_ = useSelector((state) => state.quiz.Degree)
   
    const dispatch = useDispatch()
   
    var answers = [data[currentQ].incorrect_answers[0], data[currentQ].incorrect_answers[1], data[currentQ].incorrect_answers[2], data[currentQ].correct_answer].sort(() => Math.random() - 0.5);
   
    const ControlResultContainer = useRef()
    

   
    const OnChoose=(choise)=>{
        if (choise == data[currentQ].correct_answer){
         
            dispatch(ChangeSelectedAnswer([data[currentQ].correct_answer]))
          
            ControlResultContainer.current.style.visibility='visible'
            ControlResultContainer.current.style.backgroundColor = 'green'
            

            setTimeout(()=>{
                ControlResultContainer.current.style.visibility = 'hidden'
             
                dispatch(NextQ())
                dispatch(IncDegree())
                dispatch(ChangeSelectedAnswer([""]))
                
               
            },3000)
            
           
        }else{
            dispatch(ChangeSelectedAnswer(["You choice is wrong"]))
            ControlResultContainer.current.style.visibility = 'visible'
            ControlResultContainer.current.style.backgroundColor = 'red'
            setTimeout(() => {
             
                dispatch(NextQ())
                dispatch(ChangeSelectedAnswer([""]))
                
                ControlResultContainer.current.style.visibility = 'hidden'
            }, 3000)

        }


    }
  return (
    <>
    <div className='QuizPageMain'>
        <div className='QuestionContainer'>
              <p>{data[currentQ].question}</p>
        </div>
          <div className='AnswerContainer' onClick={() => OnChoose(answers[0])}>
              {answers[0]}
          </div>
          <div className='AnswerContainer' onClick={() => OnChoose(answers[1])}>{answers[1]}</div>
          <div className='AnswerContainer' onClick={() => OnChoose(answers[2])}>{answers[2]}</div>
          <div className='AnswerContainer' onClick={() => OnChoose(answers[3])}> {answers[3]}</div>
          <div className='AnswerContainer RightAnswerContainer' ref={ControlResultContainer}> {SelectedAnswer}   </div>
          <div className='DegreeContainer'> Your Total Marks : {Degree_}   </div>
            <Timer></Timer>
         
     
    </div>
    
      </>
  )
}
