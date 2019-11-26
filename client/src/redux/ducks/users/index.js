import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USERS = "users/GET_USERS"
const ADD_GOING = "going/ADD_GOING"
const NOT_GOING = "notGoing/NOT_GOING"
const GOING_LIST = "goinglist/GOING_LIST"
const NOT_GOING_LIST = "notgoinglist/NOT_GOING_LIST"
// initial state
const initialState = {
  users: [],
  userGoing: [],
  userNotGoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case ADD_GOING:
      return { ...state, userGoing: [...state.userGoing, action.payload] }
    case NOT_GOING:
      return {
        ...state,
        userNotGoing: [...state.userNotGoing, action.payload]
      }

    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("https://randomuser.me/api/?results=1").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data.results
      })
    })
  }
}

const getUsersGoing = () => {
  return dispatch => {
    axios.get("http://localhost:8080/users/going").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data
      })
    })
  }
}

const getUsersNotGoing = () => {
  return dispatch => {
    axios.get("http://localhost:8080/users/notgoing").then(resp => {
      dispatch({
        type: GET_USERS,
        payload: resp.data
      })
    })
  }
}

function addGoing(user) {
  return dispatch => {
    axios.post("/users/going", { user }).then(resp => {
      dispatch({
        type: ADD_GOING,
        payload: resp.data
      })

      dispatch(getUsers())
    })
  }
}

function addNotGoing(user) {
  return dispatch => {
    axios.post("/users/notgoing", { user }).then(resp => {
      dispatch({
        type: NOT_GOING,
        payload: resp.data
      })
      dispatch(getUsers())
    })
  }
}

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const going = useSelector(appState => appState.userState.userGoing)
  const notgoing = useSelector(appState => appState.userState.userNotGoing)
  const dispatch = useDispatch()

  const get = () => dispatch(getUsers())
  const sendNotGoing = user => {
    dispatch(addNotGoing(user))
  }
  const sendGoing = user => {
    dispatch(addGoing(user))
  }
  useEffect(() => {
    get()
  }, [dispatch])

  return { users, sendGoing, going, notgoing, sendNotGoing }
}
