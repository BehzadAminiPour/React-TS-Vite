function ListGroup() {
  let cities = ["Barcelona", "Milan", "Munich", "Nants"];
  //   cities = [];
  return (
    <>
      <h1 className="ms-2">Cities</h1>
      {cities.length === 0 && <p>No items found.</p>}

      <ul className="list-group">
        {cities.map((city) => (
          <li key={city} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
