// import { FormEvent, useState /* useRef*/ } from "react";
import { FieldValues, useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = {
  //     name: "",
  //     age: 0,
  //   };
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(name, age);
  //   setName("");
  //   setAge("");
  //   // if (nameRef.current !== null) person.name = nameRef.current.value;
  //   // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //   // console.log(person);
  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name :
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control" /* ref={nameRef} */
        />
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Age :
        </label>
        <input
          {...register("age")}
          id="number"
          type="number"
          className="form-control"
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
