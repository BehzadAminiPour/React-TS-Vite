import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: "primary" | "secondary" | "warning" | "info";
  onClick: () => void;
}
const Button = ({ children, color, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`btn btn-` + color}>
      {children}
    </button>
  );
};

export default Button;
