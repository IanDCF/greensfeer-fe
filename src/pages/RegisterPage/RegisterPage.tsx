import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterComponent from "../../components/Register/Register";
import RegisterInfo from "../../components/RegisterInfo/RegisterInfo";
import newUserSchema, {
  type TNewUser,
  registerInfoUserSchema,
  registerUserSchema,
} from "../../schemas/UserSchema";
import { useAuth } from "../../context/AuthProvider/AuthProvider";

const newUserDefault = {} as TNewUser;
const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const newUserDefault = {} as TNewUser;
  const [newUser, setNewUser] = useState<TNewUser>(newUserDefault);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [registerDone, setRegisterDone] = useState(false);
  const [registerDoneInfo, setRegisterDoneInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (registerDoneInfo) validateUser();
  }, [registerDoneInfo]);

  const validateUser = async () => {
    const userValidation = newUserSchema.safeParse(newUser);
    if (!userValidation.success) {
      setError(error);
      console.log(userValidation.error.errors);
    }
    if (userValidation.success) {
      const user = userValidation.data;
      try {
        const createdUser = await signUp(user.email, user.password);
        setLoading(true);
        if (createdUser) {
          navigate("/youarebiutiful");
          // navigate('/profile')
        }
        console.log(createdUser);
      } catch (error) {
        console.log("catched error : ", error);
      }
    }
  };
  const handleCheckbox1 = (isChecked: boolean) => {
    setIsChecked1(isChecked);
  };

  const handleCheckbox2 = (isChecked: boolean) => {
    setIsChecked2(isChecked);
  };

  const handleFirstSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const passwordInput = e.currentTarget.elements.namedItem(
      "password"
    ) as HTMLInputElement;
    const confirmPasswordInput = e.currentTarget.elements.namedItem(
      "passwordConfirm"
    ) as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const registerUserSchemValidation = registerUserSchema.safeParse({
      email,
      password,
      confirmPassword,
    });
    if (!registerUserSchemValidation.success) {
      const error = registerUserSchemValidation.error.errors; //We need to format the errors so we can pass the string to the setError
      setError("There was some kind of problem with the inputs");
      console.log(error);
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      setError("Passwords don't match");
      console.log(error);
      return;
    }
    if (!isChecked1 || !isChecked2) {
      setError("You need to accept all the fields");
      console.log(error);
      return;
    }
    if (registerUserSchemValidation.success) {
      console.log("Setting User Registration part 1");
      setNewUser({ ...newUser, email, password, confirmPassword });
      setRegisterDone(true);
      setIsChecked1(false);
      setIsChecked2(false);
    }
  };
  const handleSecondSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstNameInput = e.currentTarget.elements.namedItem(
      "firstName"
    ) as HTMLInputElement;
    const secondNameInput = e.currentTarget.elements.namedItem(
      "secondName"
    ) as HTMLInputElement;
    const rolInput = e.currentTarget.elements.namedItem(
      "role"
    ) as HTMLInputElement;

    const firstName = firstNameInput.value;
    const secondName = secondNameInput.value;
    const rol = rolInput.value;
    const registerInfoValidation = registerInfoUserSchema.safeParse({
      firstName,
      secondName,
      rol,
    });
    if (!registerInfoValidation.success) {
      const error = registerInfoValidation.error.errors; //We need to format the errors so we can pass the string
      // to the setError
      setError("There was some kind of problem with the inputs");
      console.log(error);
      return;
    }
    if (!isChecked1) {
      setError("You need to accept all the fields");
      console.log(error);
      return;
    }
    if (registerInfoValidation.success) {
      console.log("Setting up part 2");
      setNewUser({ ...newUser, firstName, secondName, rol });
      //post firstName, secondName, rol to db
      setRegisterDoneInfo(true);
    }
  };
  return (
    <>
      {!registerDone && (
        <RegisterComponent
          handleSubmit={handleFirstSubmit}
          handleCheckbox1={handleCheckbox1}
          handleCheckbox2={handleCheckbox2}
          isChecked1={isChecked1}
          isChecked2={isChecked2}
        />
      )}
      {registerDone && !loading && (
        <RegisterInfo
          handleSubmit={handleSecondSubmit}
          handleCheckbox1={handleCheckbox1}
          isChecked1={isChecked1}
        />
      )}
      {loading && <div style={{ fontSize: "15rem" }}>Loading...</div>}
    </>
  );
};

export default Register;
