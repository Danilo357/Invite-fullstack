import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_USERS = "users/GET_USERS"
const ADD_GOING = "going/ADD_GOING"
// initial state
const initialState = {
  users: [],
  userGoing: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    case ADD_GOING:
      return { ...state, userGoing: action.payload }

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

const addGoing = () => {
  return dispatch => {
    axios.post("/users/going").then(resp => {
      dispatch({
        type: ADD_GOING,
        payload: resp.data
      })
    })
  }
}

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return { users }
}

export function usePerson() {
  const going = useSelector(appState => appState.userState.userGoing)
  const dispatch = useDispatch()
  const toGo = user => dispatch(Going(user))
  const addGoingg = user => dispatch(addGoing(user))
  const addNotGoing = user => dispatch(addNotGoing(user))
  useEffect(() => {
    dispatch(addGoing())
  }, [dispatch])

  return { going, toGo, addGoingg, addNotGoing }
}

function Going() {
  return dispatch => {
    axios.post("/users/going").then(resp => {
      dispatch()
    })
  }
}
