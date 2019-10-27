import React from 'react'
import styled from 'styled-components'

import './Todo.css'

const Todo = styled.div`
    font-size: 1.5rem;
    margin-top: 1rem;
`

export default function ToDo({ dispatch, id, task, completed }) {
    const toggle = (id) => {
        return dispatch({
            type: 'TOGGLE',
            payload: id
        })
    }

    return (
        <Todo className={`todo${completed ? ' completed' : ''}`} onClick={() => toggle(id)}>
            {task}
        </Todo>
    )
}