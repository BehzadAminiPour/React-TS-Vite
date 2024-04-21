import { FormEvent, useState, useRef } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = {
  //     name: "",
  //     age: 0,
  //   };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(name, age);
    setName("");
    setAge("");
    // if (nameRef.current !== null) person.name = nameRef.current.value;
    // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    // console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name :
        </label>
        <input
          value={name}
          id="name"
          type="text"
          className="form-control" /* ref={nameRef} */
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Age :
        </label>
        <input
          value={age}
          id="number"
          type="number"
          className="form-control"
          onChange={(event) => setAge(event.target.value)}
          /* ref={ageRef} */
        />
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
