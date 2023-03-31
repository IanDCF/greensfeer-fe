import axios from "axios";
import { IUser } from "customTypes";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
  type UserCredential,
} from "firebase/auth";
import React, { useContext, createContext, useEffect, useState } from "react";
import entryForSignUp, { createUser } from "../../helpers/userFetcher";
import { auth } from "../../firebase/firebase";

interface InterfaceAuthProvider {
  currentUser: User | null;
  signUp: (
    email: string,
    password: string,
    firstName: string,
    secondName: string,
    role: string
  ) => Promise<IUser | null>;
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
const signUp = async (
  email: string,
  password: string,
  firstName: string,
  secondName: string,
  role: string
) => {
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const idToken = await credentials.user.getIdToken();
  //refactor backend url to env
  await entryForSignUp(idToken);

  //call database & create user
  return await createUser(email, firstName, secondName, role, idToken);
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
