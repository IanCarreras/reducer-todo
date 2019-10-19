export const initialState = {
    todos: [
        {
          item: 'LEARN ABOUT REDUCERS',
          isCompleted: false,
          id: 3892987589
        }
      ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'Add':
            return state
        case 'Toggle':
            return state
        case 'Delete':
            return state
        default:
            return state
      }
}