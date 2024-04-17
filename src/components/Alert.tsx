import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-danger my-5 mx-2 p-2">{children}</div>;
};

export default Alert;
