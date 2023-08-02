import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  addNewTodo: ({ title }: TodoTitle) => void
}
export const CreateTodo: React.FC<Props> = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    addNewTodo({ title: newTodo })
    setNewTodo('')
  }

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTodo(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        value={newTodo}
        onChange={handleClick}
        placeholder="Add new task"
        autoFocus
      />
    </form>
  )
}
