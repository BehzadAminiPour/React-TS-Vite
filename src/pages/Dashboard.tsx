import { Link } from "react-router-dom";

interface Props {
  formData: { name: string; age: number };
}
const Dashboard = ({ formData }: Props) => {
  return (
    <div>
      <h3>{formData?.name}</h3>
      <h4>{formData?.age}</h4>
      <Link to="/form">Back to form</Link>
    </div>
  );
};

export default Dashboard;
