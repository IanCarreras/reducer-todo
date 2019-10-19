export const initialState = {
    todos: [
        {
          item: 'LEARN ABOUT REDUCERS',
          completed: false,
          id: 3892987589
        }
      ],
      search: '',
      render: []
}

export const reducer = (state, action) => {
    let newState = ''
    let search = ''
    let render = []

    switch (action.type) {
      case 'ADD':
        return {
          ...state,
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
        return { 
          ...state,
          todos: newState 
        }
      case 'CLEAR':
        return { 
          ...state,
          todos: state.todos.filter(todo => !todo.completed) 
        }
      case 'SEARCH':
        search = new RegExp(action.payload, 'i')
        state.todos.forEach(todo => {
          console.log(search)
          console.log(todo, todo.item.search(search))
          if (todo.item.search(search) !== -1) {
            return render.push(todo)
          } 
        })
        newState = { ...state, 
          search: action.payload,
          render
        }
        return newState
      default:
          return state
    }
}