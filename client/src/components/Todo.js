import React from 'react'
import styled from 'styled-components'

import './Todo.css'

const Todo = styled.div`
    font-size: 1.5rem;
    margin-top: 1rem;
`

export default function ToDo({ dispatch, task, completed }) {
    const toggle = () => {
        return {
            type: 'TOGGLE',
            payload: 'toggle'
        }
    }
    return (
        <Todo className={`todo${completed ? ' completed' : ''}`} onClick={() => toggle()}>
            {task}
        </Todo>
    )
}