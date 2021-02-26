import { useEffect, useState } from "react";

import React from 'react'
import Employee from "../Employee/Employee";

const Users = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUsers(data);
        console.log(data)
      })
  }, [])

  return (
    <div className="home">
      {users && <Employee users={users} />}
    </div>
  );
}

export default Users







