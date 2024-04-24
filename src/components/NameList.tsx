import axios from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

const NameList = () => {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    axios
      .get<Users[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);
  return (
    <div>
      <h2>Users : </h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
