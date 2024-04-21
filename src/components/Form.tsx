import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name :
        </label>
        <input id="name" type="text" className="form-control" ref={nameRef} />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Age :
        </label>
        <input
          id="number"
          type="number"
          className="form-control"
          ref={ageRef}
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
