import React from "react";
import { useSelector } from "react-redux";

const QuesItem = ({ques,changeQues}) => {
    let {head,id} = ques;

  const {currentQues} = useSelector(state => state.form)

  return (
    <li
      onClick={()=>{changeQues(ques)}}
      className={currentQues?.id == id ? 
        'text-center mt-1 py-2 px-2 bg-black/50 border-2  rounded cursor-pointer border-green-600' : 
        'text-center mt-1 py-2 px-2 bg-black/50 border-2  rounded cursor-pointer' }
    >
      {head}
    </li>
  );
};

export default QuesItem;
