import React from "react"
import { useUsers } from "../hooks"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function Not() {
  const { notgoing } = useUsers()
  return (
    <div>
      <p>
        Invite Your Friend Here: <Link to="/">Invite:</Link>
      </p>
      <div className="container">
        {notgoing.map((person, e) => (
          <p key={e}>
            <img src={person.picture.large} />
            <br />
            Name: {person.name.first} {person.name.last}
            <br />
            Phone: {person.phone}
            <br />
            Email: {person.email}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Not
