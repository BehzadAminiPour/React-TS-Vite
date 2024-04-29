import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible my-5 mx-2">
      {children}
      <button onClick={onClick} className="btn-close"></button>
    </div>
  );
};

export default Alert;
