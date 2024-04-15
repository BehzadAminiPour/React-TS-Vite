function ListGroup() {
  const cities = ["Barcelona", "Milan", "Munich", "Nants"];
  return (
    <>
      <h1>Cities</h1>
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
