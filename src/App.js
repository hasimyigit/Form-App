import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import FeedBack from "./components/auth/FeedBack";
import Results from "./components/Results/Results";
import Main from "./components/Shared/Main";
import SidePanel from "./components/SidePanel/SidePanel";
import Voting from "./components/Voting";
import {
  getDbCountQuesUser,
  getDbResult,
  getResultCondition,
} from "./store/actions/resultAction";
import { child, get, onValue, push, ref, set } from "firebase/database";
import { db } from "./firebase/firebase";

function App() {
  const {
    form: { currentQues },
    user: { profile },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [resultsShow, setResultsShow] = useState(null);

  useEffect(async () => {
    if (currentQues) {
      const starCountRef = ref(
        db,
        `results/${currentQues.id}/users/${profile.uid}`
      );
      onValue(starCountRef, async (snapshot) => {
        setLoading(true);
        const data = snapshot.val();

     
        if (data) {
          dispatch(await getDbCountQuesUser(currentQues.id));
          dispatch(await getDbResult(currentQues.id));
        }
        setResultsShow(data);
        setLoading(false);
      });

    }
  }, [currentQues]);

  return (
    <div className="relative h-screen">
      <SidePanel />

      <Main>
        {loading == true ? (
          <FeedBack />
        ) : resultsShow == true ? (
          <Results />
        ) : (
          <Voting />
        )}
      </Main>
    </div>
  );
}

export default App;
