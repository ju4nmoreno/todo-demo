import { type FiltersValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeTasks: number
  countTasks: number
  deleteCompletedTodos: () => void
  filterSelected: FiltersValue
  onFilterChange: (key: FiltersValue) => void
}
export const Footer: React.FC<Props> = ({
  activeTasks = 0,
  filterSelected,
  deleteCompletedTodos,
  onFilterChange,
  countTasks
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        {activeTasks} {activeTasks > 1 ? 'tasks' : 'task'} left
      </span>
      <Filters
        onFilterChange={onFilterChange}
        filterSelected={filterSelected}
      />
      {countTasks > 0 &&
        <button
          className='clear-completed'
          onClick={deleteCompletedTodos}
        >Delete Completed</button>
      }
    </footer>
  )
}
