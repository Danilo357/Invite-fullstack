import React from "react"
import { useUsers } from "../hooks"

function Invite() {
  const { users, sendGoing, sendNotGoing, going, notgoing } = useUsers()

  return (
    <div className="container">
      {users.map((user, i) => (
        <div key={i}>
          <p>
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
            {/* {console.log(going + " going")} */}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Invite
