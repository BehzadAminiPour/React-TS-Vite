import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    console.log("Submitted");
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name :
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Age :
        </label>
        <input id="number" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
