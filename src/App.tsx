import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './conts'
import { type TodoId, type Todo as TypeTodo, type FiltersValue, type TodoTitle } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Task of todos 1',
    completed: false
  },
  {
    id: '2',
    title: 'Task of todos 2',
    completed: false
  },
  {
    id: '3',
    title: 'Task of todos 3',
    completed: true
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelectedNoMas, setFilterSelected] = useState<FiltersValue>(TODO_FILTERS.ALL)

  const completedTodo = ({ id, completed }: Pick<TypeTodo, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelectedNoMas === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelectedNoMas === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const deletedTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const activeTasks = todos.filter(todo => !todo.completed).length
  const countTasks = todos.length - activeTasks

  const deleteCompletedTodos = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const onFilterChange = (filter: FiltersValue): void => {
    setFilterSelected(filter)
  }

  const handleNewTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header addNewTodo={handleNewTodo} title='TODO'/>
      <Todos
        todos={filteredTodos}
        completedTodo={completedTodo}
        deletedTodo={deletedTodo}
      />
      <Footer
        countTasks={countTasks}
        onFilterChange={onFilterChange}
        activeTasks={activeTasks}
        filterSelected={filterSelectedNoMas}
        deleteCompletedTodos={deleteCompletedTodos}
      />
    </div>
  )
}

export default App
