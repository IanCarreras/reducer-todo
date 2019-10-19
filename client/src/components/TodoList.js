import React from 'react'
import styled from 'styled-components'

import Todo from './Todo'

const List = styled.div`
    float: right;
    width: 70%;
`

export default function TodoList({ dispatch, todos }) {
    console.log(todos)
    return (
        <List>
            {
                todos.map((todo, indx) => {
                return <Todo 
                            key={indx}
                            task={todo.item}
                            completed={todo.completed}
                            dispatch={dispatch} />
                })
            }
        </List>
    )
}