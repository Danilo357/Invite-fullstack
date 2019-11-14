import React from "react"
import { useUsers } from "../hooks"
import { usePerson } from "../hooks"
// import { user } from "../hooks"

function App() {
  const { users } = useUsers()
  const { add, toGo } = usePerson()

  return (
    <div className="container">
      {users.map(user => (
        <p key={user.id}>
          <img src={user.picture.thumbnail} />
          <br />
          Name: {user.name.first} {user.name.last}
          <br />
          Phone: {user.phone}
          <br />
          Email: {user.email}
        </p>
      ))}
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default App
