import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Invite from "./Invite"
import Going from "./Going"
import NotGoing from "./NotGoing"

function App() {
  return (
    <Router>
      <div className="header">
        <br />
        <p>
          Check Going List Here: <Link to="/going">Going</Link>
        </p>

        <br />
        <p>
          Check Not Going List Here: <Link to="/notgoing">Not Going</Link>
        </p>

        <br />
        <br />
        <Route exact path="/" component={Invite}></Route>
        <Route path="/Going" component={Going}></Route>
        <Route path="/NotGoing" component={NotGoing}></Route>
      </div>
    </Router>
  )
}

export default App
