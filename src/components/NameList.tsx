import apiClients, { CanceledError } from "../services/api-clients";
import { useEffect, useState } from "react";

interface Users {
  id: number;
  name: string;
}

const NameList = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClients
      .get<Users[]>("/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  const handleDelete = (user: Users) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    apiClients.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const handleUpdateUser = (user: Users) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClients.patch("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const handleAddUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 11, name: "Behzad" };
    setUsers([newUser, ...users]);

    apiClients
      .post("/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div className="bg-info p-1">
      <h2>Users : </h2>
      <button onClick={handleAddUser} className="btn btn-success mb-1 btn-sm">
        Add+
      </button>
      {error && <p className="text-danger">{error}</p>}
      {isLoading ? (
        <div className="spinner-border"></div>
      ) : (
        <ul className="list-group">
          {users.map((user) => (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  onClick={() => handleUpdateUser(user)}
                  className="btn btn-outline-info btn-sm mx-1"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(user)}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NameList;
