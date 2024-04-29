import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
interface Props {
  items: number;
}
const Home = ({ items }: Props) => {
  return (
    <>
      <Navbar items={items} />
      <Outlet />
    </>
  );
};

export default Home;
