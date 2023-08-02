import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  title: string
  addNewTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ addNewTodo, title }) => {
  return (
    <header className="header">
      <h1>
        {title}
      </h1>
      <CreateTodo addNewTodo={addNewTodo}/>
    </header>
  )
}
