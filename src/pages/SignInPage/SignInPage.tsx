import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
import { sigInSchema } from "../../schemas/UserSchema";
import SignInComponent from "../../components/SignIn/SignIn";

const SignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const passwordInput = e.currentTarget.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;
    const userValidation = sigInSchema.safeParse({ email, password });
    if (!userValidation.success) {
      const error = userValidation.error.errors; //We need to format the errors so we can pass the string to the setError
      setError("There was some kind of problem with the inputs");
      console.log(error);
      return;
    }
    if (userValidation.success) {
      const { email, password } = userValidation.data;
      try {
        const { user } = await login(email, password);
        if (user) {
          console.log(`User ${user.email} logged in successfully`);
          navigate("/marketplace");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return <>{<SignInComponent handleSubmit={handleSubmit} />}</>;
};

export default SignIn;
