import React from 'react'

export default function DeleteButton(props) {
    return (
        <button onClick={() => props.deleteMonster(props)}>Remove</button>
    )

}