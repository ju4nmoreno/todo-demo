import { type TodoId, type ListOfTodos, type Todo as TypeTodo } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  completedTodo: ({ id, completed }: Pick<TypeTodo, 'id' | 'completed'>) => void
  deletedTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({
  todos,
  completedTodo,
  deletedTodo
}) => {
  return (
    <ul className='todo-list'>
      {
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completedTodo={completedTodo}
            deletedTodo={deletedTodo}
          />
        ))
      }
    </ul>
  )
}
