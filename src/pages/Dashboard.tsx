import { Link } from "react-router-dom";

interface Props {
  formData: { name: string; age: number };
}
const Dashboard = ({ formData }: Props) => {
  return (
    <div>
      <h3>{formData ? formData?.name : <p>Unkown user</p>}</h3>
      <h4>{formData?.age}</h4>
      <Link to="/form">Back to form</Link>
    </div>
  );
};

export default Dashboard;
