import { faSpinner, faTruckLoading, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { setRxUser } from "../../store/actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const loginHandle = () => {
    if(email === '' || password === ''){
      setErrorMessage('Email yada şifre boş olamaz.')
      return 0;
    }
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setRxUser(user))
        setLoading(false)
      })
      .catch((error) => {
        
         if(error.code == 'auth/wrong-password'){
          setErrorMessage('Şifre Yanlış.')
         }else if(error.code =='auth/user-not-found'){
          setErrorMessage('Kullanıcı Bulunamadı.')
         }
         else{
          setErrorMessage(error.message)
         }
        
        setLoading(false)
      });
      
  };
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col justify-center items-center  bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <div className="relative sm:max-w-sm w-72">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3  text-gray-700 text-center font-semibold">
              <FontAwesomeIcon icon={faUserAlt} className="text-4xl" />
            </label>
            <form className="mt-10" >
              <div>
                <input
                  value={email}
                  onChange={({ target: { value } }) => {
                    setEmail(value);
                  }}
                  type="email"
                  placeholder="E-mail"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-4"
                />
              </div>

              <div className="mt-7">
                <input
                  value={password}
                  onChange={({ target: { value } }) => {
                    setPassword(value);
                  }}
                  type="password"
                  placeholder="Şifre"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-4"
                />
              </div>
              {errorMessage && (
                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">{errorMessage}</label>
                    
                  </div>
                </div>
              )}

              <div className="mt-7">
                <button
                type="button"
                disabled={loading}
                  onClick={loginHandle}
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                 {loading== false ? <span>Giriş</span>: <FontAwesomeIcon icon={faSpinner} spin />} 
                  
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
