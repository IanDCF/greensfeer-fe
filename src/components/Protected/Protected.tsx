import { User } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/AuthProvider";
interface Props {
  children: JSX.Element;
  currentUser: User | null;
}

const Protected = ({ children }: Props): JSX.Element => {
  const { currentUser } = useAuth();
  return !currentUser ? <Navigate to="/" replace /> : <>{children}</>;
};

export default Protected;
