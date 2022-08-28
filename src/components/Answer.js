import React from 'react'
import { useSelector } from 'react-redux';


const Answer = ({answer,changeAnswer}) => {
  const {src,id,title} = answer;
 
  const {currentAnswer} = useSelector(state => state.form)
  return (
    <>
   {answer.src &&  (<div onClick={()=>{changeAnswer(answer)}} 
   className={currentAnswer?.id==id ?
     'border-solid border-4  border-green-500 rounded cursor-pointer ':
     'border-solid border-2 border-slate-500 rounded cursor-pointer'} 
   style={{minHeight:"200px", minWidth:"200px",maxHeight:"200px", maxWidth:"200px"}}>
       <img src={src}  style={{width:"200px",height:"200px"}}/>
   </div>) 
  }
  {!answer.src && 
  (<div onClick={()=>{changeAnswer(answer)}} 
  className={currentAnswer?.id==id ?
    'border-solid border-4  bg-green-500 text-white rounded cursor-pointer flex justify-center items-center':
    'border-solid border-2 border-slate-500 rounded cursor-pointer flex justify-center items-center'} 
  style={{minHeight:"250px", minWidth:"250px",maxHeight:"250px", maxWidth:"250px"}}>
     <h2>{title}</h2>
  </div>) }
   </>
  )
}

export default Answer