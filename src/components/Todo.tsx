import { type TodoId, type Todo as TypeTodo } from '../types'

interface Props {
  todo: TypeTodo
  completedTodo: ({ id, completed }: Pick<TypeTodo, 'id' | 'completed'>) => void
  deletedTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({
  todo,
  completedTodo,
  deletedTodo
}) => {
  const handleCompletedTodo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    completedTodo({
      id: todo.id,
      completed: event.target.checked
    })
  }

  const handledDeleteTodo = ({ id }: TodoId): void => {
    deletedTodo({ id })
  }

  return (
      <li
      key={todo.id}
      className={`${todo.completed ? 'completed' : ''}`}
    >
      <div className='view'>
        <input
          onChange={handleCompletedTodo}
          className='toggle'
          checked={todo.completed}
          type="checkbox"
        />
        <label>{todo.title}</label>
        <button
          onClick={() => { handledDeleteTodo({ id: todo.id }) }}
          className='destroy' />
      </div>
    </li>
  )
}
