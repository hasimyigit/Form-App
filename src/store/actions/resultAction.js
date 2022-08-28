import { child, get, push, ref, set } from "firebase/database";
import { db } from "../../firebase/firebase";
import * as types from "./types";

export const getResultCondition = async (currentQues, uid) => {
  return (
    await get(child(ref(db), `results/${currentQues}/users/${uid}`))
  ).val();
};

export const addReply = async (currentQues, currentAnswer, uid) => {
 
  try {
    let res = await set(
      ref(db, `results/${currentQues}/answer/${currentAnswer.id}/${uid}`),
      currentAnswer.value
    );
    authCondition(currentQues, uid);
  } catch (err) {
    console.log(err);
  }
};

const authCondition = async (currentQues, uid) => {
  try {
    let res = await set(ref(db, `results/${currentQues}/users/${uid}`), true);
   
  } catch (err) {
    console.log(err);
  }
};

const setRxUserCount = (count) => ({
  type: types.SET_USER_COUNT_IN_QUES,
  payload: count,
});

export const getDbCountQuesUser = async (currentQues) => {
  let userCount = Object.keys(
    (await get(child(ref(db), `results/${currentQues}/users`))).val()
  ).length;
  return setRxUserCount(userCount);
};

const setRxDbResult = (data) => ({
  type: types.SET_RESULT,
  payload: data,
});

export const getDbResult = async (currentQues) => {
  let labels = [];
  let values = [];
  let answerInQuesList = Object.entries(
    (await get(child(ref(db), `ques/${currentQues}/answer`))).val()
  );
  for (let index = 0; index < answerInQuesList.length; index++) {
    const [key, value] = answerInQuesList[index];

    labels.push(value.title);
    let getDbVal = (
      await get(child(ref(db), `results/${currentQues}/answer/${key}`))
    ).val();

    let dataValue = getDbVal == null ? 0 : Object.keys(getDbVal).length;
    values.push(dataValue);
  }
  return setRxDbResult({ labels, data: values });
};
