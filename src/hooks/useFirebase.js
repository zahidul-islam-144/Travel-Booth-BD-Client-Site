import initializeAuthentication from "../Firebase/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  let auth = getAuth();

  /* ==========================
        Google Sign section code
       ========================== 
    */

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
    // .then(result => {
    //     const user = (result.user);
    //     setUser(user);
    //     // window.location = '/home'
    // })
    // .catch(error => {
    //     setError(error.message);
    // })
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
      // window.location = '/home'
    });
  
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  return {
    signInUsingGoogle,
    authError,
    user,
    logout,
    isLoading,
    setIsLoading,
    setAuthError,
  };
};

export default useFirebase;
