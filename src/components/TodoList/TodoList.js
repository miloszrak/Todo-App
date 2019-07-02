import React, { useState } from 'react'
import TodoItem from './TodoItem'
import uuidv4 from 'uuid/v4'

function TodoList() {
    const [inputValue, setInputValue] = useState('')
    const [textValue, setTextValue] = useState('')
    const [itemList, setItemList] = useState([])

    const addItem = () => {
        setItemList([...itemList, {
            name: inputValue,
            description: textValue,
            id: uuidv4(),
        }])
        setInputValue('')
        setTextValue('')
    }

    const deleteItem = (id) => {
        const filteredList = itemList.filter(item => {
            if (id === item.id) {
                return false
            }
            return true
        })

        setItemList(filteredList)
    }

    const editItem = (id, values) => {
        const modifiedList = itemList.map(item => {
            if (id === item.id) {
                return {
                    ...item,
                    ...values,
                }
            }
            return item
        })

        setItemList(modifiedList)
    }

    return(
        <div>
            <h1 className="pageTitle">Create your own To-Do task</h1>
            <div className="createForm">
                <input 
                    onChange={event => setInputValue(event.target.value)}
                    className="createInput" 
                    placeholder="type a name"
                    value={inputValue}
                    type="text"
                />
                <textarea 
                    onChange={event => setTextValue(event.target.value)}
                    className="createTextArea" 
                    placeholder="enter your description"
                    value={textValue}
                    type="text"
                />
                <button 
                    onClick={addItem}
                    className="createButton"
                >Add to list</button>
            </div>
            <div className="itemList">
                {itemList.map((obj, index) => 
                    <TodoItem
                        key={obj.id}
                        name={obj.name}
                        description={obj.description}
                        onDelete={() => {
                            deleteItem(obj.id)
                        }}
                        onEdit={values => {
                            editItem(obj.id, values)
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default TodoList