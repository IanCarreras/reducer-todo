export const initialState = {
    todos: [
        {
          item: 'LEARN ABOUT REDUCERS',
          completed: false,
          id: 3892987589
        }
      ]
}

export const reducer = (state, action) => {
    let newState = ''

    switch (action.type) {
        case 'ADD':
            return {
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case 'TOGGLE':
            newState = state.todos.map(todo => {
                if (todo.id === action.payload) {
                  return {
                    ...todo,
                    completed: !todo.completed
                  }
                } else {
                  return todo
                }
              })        
            return { todos: newState }
        case 'CLEAR':
            newState = state.todos.filter(todo => {
                return !todo.completed
              })
            return { todos: newState }
        default:
            return state
      }
}