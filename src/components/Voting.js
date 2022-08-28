import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { rxCurrentAnswer } from "../store/actions/formActions";
import { addReply } from "../store/actions/resultAction";

import Answer from "./Answer";

const Voting = () => {

  const {
    form: { currentQues,currentAnswer },
    user: { profile },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeAnswer = (answer) => {
    dispatch(rxCurrentAnswer(answer));
  };

  const handleResult = () => {
  
    addReply(currentQues.id, currentAnswer,profile.uid)
    
  };

  return (
    <>
      <div className="flex justify-center pt-6">
        <h1 className="font-serif text-green-900">{currentQues?.head}</h1>
      </div>
      <div className="flex justify-center  sm:h-[80vh] h-[74vh] gap-4 flex-wrap mt-4 overflow-auto">
        {currentQues &&
          currentQues.answer.map((ans) => (
            <Answer changeAnswer={changeAnswer} answer={ans} key={ans.id} />
          ))}
      </div>
      <button
        onClick={handleResult}
        type="button"
        disabled={currentAnswer == null}
        className="postButton fixed sm:right-16 sm:bottom-16 right-1 bottom-10"
      >
              {currentAnswer != null ? <span>Cevapla</span>: <FontAwesomeIcon icon={faBan} />} 
      </button>
    </>
  );
};

export default Voting;
