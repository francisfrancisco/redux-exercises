/*
  EXAMPLE PROBLEM!!!

  Export a reducer that will manages an array of todos. It must expect the following action types:
    - ADD_TODO
    - FETCH_TODOS
    - REMOVE_TODO
*/

// These labels were theoretically imported from an action creator file:
let ADD_TODO = 'ADD_TODO'
let FETCH_TODOS = 'FETCH_TODOS'
let REMOVE_TODO = 'REMOVE_TODO'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case FETCH_TODOS:
      return [...action.payload]
    case REMOVE_TODO:
      return state.filter(todo => todo.id === Number(action.payload))

    default:
      return state;
  }
}
