// import { FormEvent, useState /* useRef*/ } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React from "react";
interface FormData {
  name: string;
  age: number;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();
  const navigate = useNavigate();
  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    navigate("/dashboard");
  };
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
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name :
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control" /* ref={nameRef} */
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required!</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 character!</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Age :
        </label>
        <input
          {...register("age", { required: true, minLength: 1 })}
          id="number"
          type="number"
          className="form-control"
          /* ref={ageRef} */
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The age field is required!</p>
        )}
        {errors.age?.type === "minLength" && (
          <p className="text-danger">The age must be at least 1 character!</p>
        )}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};

export default Form;
