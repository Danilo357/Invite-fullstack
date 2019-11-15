import React from "react"
import { useUsers } from "../hooks"

function App() {
  const { users, sendGoing, sendNotGoing } = useUsers()

  return (
    <div className="container">
      {users.map(user => (
        <>
          <p key={user.id}>
            <img src={user.picture.large} />
            <br />
            Name: {user.name.first} {user.name.last}
            <br />
            Phone: {user.phone}
            <br />
            Email: {user.email}
          </p>
          <button onClick={e => sendGoing(user)}>Going</button>
          <span>
            <button onClick={e => sendNotGoing(user)}>Not Going</button>
          </span>
        </>
      ))}
    </div>
  )
}

export default App
