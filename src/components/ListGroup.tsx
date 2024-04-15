import { useState } from "react";
function ListGroup() {
  let cities = ["Barcelona", "Milan", "Munich", "Nants", "Tehran"];
  //   cities = [];
  const [selectedCity, setSelectedCity] = useState(-1);

  return (
    <>
      <h1 className="ms-2">Cities</h1>
      {cities.length === 0 && <p>No items found.</p>}

      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={index}
            className={`${
              selectedCity === index
                ? "list-group-item active"
                : "list-group-item "
            }`}
            onClick={() => setSelectedCity(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
