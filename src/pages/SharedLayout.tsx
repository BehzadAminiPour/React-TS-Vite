import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
interface Props {
  items: number;
}
const SharedLayout = ({ items }: Props) => {
  return (
    <>
      <Navbar items={items} />
      <Outlet />
    </>
  );
};

export default SharedLayout;
