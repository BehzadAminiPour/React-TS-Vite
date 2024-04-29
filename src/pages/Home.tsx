import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
const Home = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <h1>Welcome to Home page</h1>
      {showAlert && (
        <Alert onClick={() => setShowAlert(false)}>
          There is no other <span className="h6">feeling </span> like that!
        </Alert>
      )}
      <Button onClick={() => setShowAlert(true)} color="warning">
        Click Here!
      </Button>
    </>
  );
};

export default Home;
