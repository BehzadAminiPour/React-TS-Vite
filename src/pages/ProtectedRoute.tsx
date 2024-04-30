import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  formData: { name: string; age: number };
}

const ProtectedRoute = ({ children, formData }: Props) => {
  if (!formData) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
