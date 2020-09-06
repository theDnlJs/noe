/* globals window */
import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../utils/auth/initFirebase";
import { setUserCookie } from "../utils/auth/userCookies";
import { mapUserData } from "../utils/auth/mapUserData";
import {useRouter} from 'next/router'
// Init the Firebase app.
initFirebase();
const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user)=>{
        console.log(user);
        const userData = mapUserData(user);
        setUserCookie(userData);
        router.push('/admin')
      })
      .catch((error) => {
        setError("סיסמא או מייל לא נכונים");
        console.error("Error signing in with password and email", error);
      });
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {renderAuth ? (
        <form style={{ display: 'flex', flexDirection: 'column', width:'300px', margin:'0 auto', gap: '1rem' }} className="">
          <label htmlFor="userEmail" className="block">
            מייל:
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="מייל"
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            סיסמא:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="סיסמא"
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            התחבר
          </button>
        </form>
            
      ) : null}
      {error}
    </div>
  );
};

export default FirebaseAuth;
