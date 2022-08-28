import { child, get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";
import * as types from "./types";

export const getDbQuesList = async () => {
  const data = (await get(child(ref(db), `ques`))).val();
  let quesList = Object.entries(data).map((q) => {
    return {
      id: q[0],

      ...q[1],

      answer: Object.entries(q[1].answer).map((a) => {
        return { id: a[0], ...a[1] };
      }),
    };
  });

  return setRxQuesList(quesList);
};

const setRxQuesList = (quesList = []) => ({
  type: types.SET_QUESLIST,
  payload: quesList,
});

export const rxCurrentQues = (currentQues = {}) => ({
  type: types.CURRENT_QUES,
  payload: currentQues,
});

export const rxCurrentAnswer = (currentAnswer = {}) => ({
  type: types.CURRENT_ANSWER,
  payload: currentAnswer,
});

export const rxCurrentAnswerDelete = () => ({
  type: types.DELETE_ANSWER,
});
