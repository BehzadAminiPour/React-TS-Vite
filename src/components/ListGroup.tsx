import { MouseEvent } from "react";
function ListGroup() {
  let cities = ["Barcelona", "Milan", "Munich", "Nants", "Tehran"];
  //   cities = [];

  const handleClick = (event: MouseEvent) => {
    console.log(event.target);
  };

  return (
    <>
      <h1 className="ms-2">Cities</h1>
      {cities.length === 0 && <p>No items found.</p>}

      <ul className="list-group">
        {cities.map((city) => (
          <li
            key={city}
            className="list-group-item list-group-item-action"
            onClick={handleClick}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
