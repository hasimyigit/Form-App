import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import { handleSide } from "../../atoms/sideAtom";
import { rxCurrentAnswerDelete, rxCurrentQues } from "../../store/actions/formActions";
import QuesItem from "./QuesItem";

const QuesList = ({ quesList }) => {
  const [handleside, sethandleside] = useRecoilState(handleSide);

  const dispatch = useDispatch();

  const changeQues = (ques) => {
    sethandleside(!handleside)
    dispatch(rxCurrentQues(ques));

    dispatch(rxCurrentAnswerDelete());
  };

 
  useEffect(() => {
      if(quesList.length > 0){
        dispatch(rxCurrentQues(quesList[0]));
      }
     
    
  }, [quesList]);

  return (
    <>
      <div
        className="d-flex justify-content-between p-2"
        style={{ color: "white" }}
      >
        Anketler
        <span style={{ float: "right" }}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
      <div className="d-flex justify-content-between p-2">
        <ul>
          {quesList.map((q) => (
            <QuesItem key={q.id} ques={q} changeQues={changeQues} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default QuesList;
