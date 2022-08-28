import { child, get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";
import * as types from "./types";

export const setRxUser = (user = {}) => ({
  type: types.SET_LOGIN,
  payload: user,
});

export const rxSignOut = () => ({
  type: types.SIGN_OUT
});

export const getUserName = async (user) => (
  (await get(child(ref(db), `users/${user.uid}`))).val() 
  )
