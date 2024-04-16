import { useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  onSelectCity: (city: string) => void;
}

function ListGroup({ cities, heading, onSelectCity }: Props) {
  //   cities = [];
  const [selectedCity, setSelectedCity] = useState(-1);

  return (
    <>
      <h1 className="ms-2">{heading}</h1>
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
            onClick={() => {
              setSelectedCity(index);
              onSelectCity(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
