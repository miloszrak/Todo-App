import React, { useState } from 'react'


function TodoItemForm({initialValues, onSubmit}) {

    const [values, setValues] = useState(initialValues)

    
    return (
        <div>
            <input onChange={event => setValues({...values, name: event.target.value})} value={values.name}/>
            <textarea onChange={event => setValues({...values, description: event.target.value})} value={values.description}/>
            <button onClick={() => onSubmit(values)}>Submit</button>
        </div>
    )
}

export default TodoItemForm
