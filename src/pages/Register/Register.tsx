import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm1 from "./RegisterForm1";
import RegisterForm2 from "./RegisterForm2";
import newUserSchema, {
  type TNewUser,
  registerInfoUserSchema,
  registerUserSchema,
} from "../../schemas/UserSchema";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { allUsers } from "../../helpers/userFetcher";

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
    console.log("Creating user:", newUser);
    const userValidation = newUserSchema.safeParse(newUser);
    if (!userValidation.success) {
      setError(error);
      console.log(userValidation.error.errors);
    }
    if (userValidation.success) {
      const user = userValidation.data;
      try {
        const createdUser = await signUp(
          user.email,
          user.password,
          user.firstName,
          user.secondName,
          user.role
        );
        setLoading(true);
        if (createdUser) {
          setTimeout(() => {
            navigate("/marketplace");
          }, 3000);
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

  const handleFirstSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    const checkEmailAvailability = async (email: string) => {
      const users = await allUsers();
      const found = users?.find((user) => user.email === email);
      if (found) {
        console.log("Email not available");
        setError("Email not available");
        return false;
      }
      console.log("Email available! :)");
      return true;
    };

    const emailIsAvailable = await checkEmailAvailability(email);
    //I just need to make sure that this conditional works so the error raises if there is an email already
    if (!emailIsAvailable) {
      setError("A user with that email exists");
      return;
    }

    if (!registerUserSchemValidation.success) {
      const error = registerUserSchemValidation.error.errors; //We need to format the errors so we can pass the string to the setError
      setError(error[0].code);
      console.log(error);
      return;
    }
    if (password !== confirmPassword) {
      // alert("Passwords don't match");
      setError("Passwords don't match");
      // console.log(error);
      return;
    }
    if (!isChecked1 || !isChecked2) {
      setError("Please accept all the fields");
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
    setError("");
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
    const role = rolInput.value;
    const registerInfoValidation = registerInfoUserSchema.safeParse({
      firstName,
      secondName,
      role,
    });
    if (!registerInfoValidation.success) {
      const error = registerInfoValidation.error.errors; //We need to format the errors so we can pass the string
      // to the setError
      setError("There was some kind of problem with the inputs");
      console.log(error);
      return;
    }
    if (!firstName || !secondName) {
      setError("Please fill in your name");
      return;
    }
    if (role === "Tell us who you are") {
      setError("Please describe your role");
      return;
    }
    if (!isChecked1) {
      setError("Please accept all the fields");
      return;
    }
    if (registerInfoValidation.success) {
      console.log("Setting up part 2");
      setNewUser({ ...newUser, firstName, secondName, role });
      setRegisterDoneInfo(true);
    }
  };
  return (
    <section className="register">
      {/* {error && <>{"Error (still need to format errors):" + error}</>} */}
      {!registerDone && (
        <RegisterForm1
          handleSubmit={handleFirstSubmit}
          handleCheckbox1={handleCheckbox1}
          handleCheckbox2={handleCheckbox2}
          isChecked1={isChecked1}
          isChecked2={isChecked2}
          error={error}
        />
      )}
      {registerDone && !loading && (
        <RegisterForm2
          handleSubmit={handleSecondSubmit}
          handleCheckbox1={handleCheckbox1}
          isChecked1={isChecked1}
          error={error}
        />
      )}
      {loading && (
        <div className="create-company__form" style={{ fontSize: "4rem" }}>
          Thanks for creating an account! Navigating to Marketplace...
        </div>
      )}
    </section>
  );
};

export default Register;
