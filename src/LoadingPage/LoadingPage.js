import React, { useEffect } from 'react'
import '../LoadingPage/LoadingPage.css'
import { useNavigate } from 'react-router-dom'

export default function LoadingPage() {
    const nav = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            nav('/QuizPage')
        },5000)
    })
  return (
    <div className='MainPageInLoadingPage'>
      <p>Made By Eng. Mahmoud Abu-Elyazid</p>
      <div className='CycleLoading'></div>
    </div>
  )
}
