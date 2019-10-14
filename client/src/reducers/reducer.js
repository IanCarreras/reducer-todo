
import React, { useReducer } from 'react'


export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
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

const newStateValue = reducer(initialState);