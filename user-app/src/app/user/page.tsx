"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "http://localhost:8080/api/users";
const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);
  return (
    <div className="container mx-auto">
      {" "}
      <h1>Users</h1>
      {users &&
        users.length > 0 &&
        users.map((user: any) => (
          <div key={user.id} className="my-4 bg-white rounded-2xl p-2">
            <p className="text-black">User: {user.userName}</p>
            <p className="text-black">Password: {user.password}</p>
          </div>
        ))}
    </div>
  );
};

export default UsersPage;
