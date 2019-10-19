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
    switch (action.type) {
        case 'ADD':
            return {
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case 'TOGGLE':
            return state
        case 'DELETE':
            return state
        default:
            return state
      }
}