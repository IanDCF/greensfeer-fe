import axios from "axios";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
  type UserCredential,
} from "firebase/auth";
import React, { useContext, createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

interface InterfaceAuthProvider {
  currentUser: User | null;
  signUp: (email: string, password: string) => UserCredential;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext({} as InterfaceAuthProvider);
const useAuth = () => {
  return useContext(AuthContext);
};
const signUp = async (email: string, password: string) => {
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const idToken = await credentials.user.getIdToken();
  //refactor backend url to env
  await axios.post(
    "http://127.0.0.1:5001/greensfeer-db-dd101/us-central1/app/api/user/signUp",
    { idToken }

  );
  //call database & create user
  return credentials;
};
const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const logout = async () => {
  return await signOut(auth);
};

const defaultValue: InterfaceAuthProvider = {
  currentUser: null,
  login,
  logout,
  signUp,
};

const AuthProvider = ({ children }: Props) => {
  const [value, setValue] = useState<InterfaceAuthProvider>(defaultValue);

  useEffect(() => {
    const unsubs = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setValue({ ...value, currentUser: user });
        }
      } catch (error) {
        console.error(error);
      }
    });
    return unsubs;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { useAuth };
export default AuthProvider;
