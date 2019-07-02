import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TodoItemForm from '../TodoItemForm'

function TodoItem({name, description, onDelete, onEdit}) {

    const [mode, setMode] = useState('display')

    const handleSubmit = values => {
        onEdit(values)
        setMode('display')
    }

    return (
    <div className="todoItem">
        {mode === 'display' && (
            <div>
                <h2 className="todoItem__title">{name}</h2>
                <p className="todoItem__description">{description}</p>
            </div>
        )}
        {mode === 'edit' && <TodoItemForm onSubmit={handleSubmit} initialValues={{name, description}}/>}
        <div className="todoItem__buttons">
            <button onClick={() => mode === 'edit' ? setMode('display') : setMode('edit')}>
                {mode === 'edit' ? 'Cancel edit' : 'Edit'}
            </button>
            <button onClick={onDelete}>Delete</button>
        </div>
    </div>
    )
}

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default TodoItem