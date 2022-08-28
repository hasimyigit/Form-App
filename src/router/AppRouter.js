import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import App from "../App";
import Login from "../components/auth/Login";
import PrivateRouter from "../components/auth/PrivateRouter";
import { auth } from "../firebase/firebase";
import { getDbQuesList } from "../store/actions/formActions";
import { getUser, setRxUser, getUserName } from "../store/actions/userActions";

const AppRouter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect( () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
       
        dispatch(await getDbQuesList());
      
        user.fullname = await getUserName(user);
        dispatch(setRxUser(user))
        navigate('/')
     
     
      } else {
        navigate('login')
       
      }
    });
   
  }, []);
  return (
    <Routes>
      <Route
        path="*"
        element={
          <PrivateRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="*" element={<h1>Not Fount 404</h1>} />
            </Routes>
          </PrivateRouter>
        }
      />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
