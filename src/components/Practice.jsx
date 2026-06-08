import { useEffect, useState } from "react";

function Practice() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [searchTerm, setsearchTerm] = useState("");
  const handleChange = (event) => {
    setsearchTerm(event.target.value);
  };
  const filteredUsers = users.filter((user) =>
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
        console.log(data.users);
      } catch (err) {
        console.error(err);
        setError("failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`;
  }, [filteredUsers]);
  return (
    <div>
      {loading && <p>Loading....</p>}
      {users.length >= 1 && (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <p>{user.id}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
      {error === "" ? null : <p>{error}</p>}
      <input type="text" value={searchTerm} onChange={handleChange}></input>
      {filteredUsers.map((user) => (
        <p>{user.lastName}</p>
      ))}
    </div>
  );
}
export default Practice;
