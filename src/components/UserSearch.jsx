import React, { useState, useCallback, memo } from "react";

// Child component (memoized)
const UserItem = memo(({ user, onSelect }) => {
  console.log("Rendering user:", user.name);

  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", margin: "5px" }}>
      {user.name}
      <button onClick={() => onSelect(user.id)} style={{ marginLeft: "10px" }}>
        Select
      </button>
    </div>
  );
});

function UserSearch() {
  const [search, setSearch] = useState("");
  const [users] = useState([
    { id: 1, name: "Ajay" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "Kiran" },
  ]);

  // Memoized callback
  const handleSelect = useCallback((id) => {
    console.log("Selected user id:", id);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>User List</h3>
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} onSelect={handleSelect} />
      ))}
      <div
        style={{
          border: "1px solid black",
          width: "30px",
          height: "30px",
          rotate: "45deg",
        }}
      ></div>
    </>
  );
}

export default UserSearch;
