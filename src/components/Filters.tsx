import { FILTERS_BUTTONS } from '../conts'
import { type FiltersValue } from '../types'

interface Props {
  onFilterChange: (key: FiltersValue) => void
  filterSelected: FiltersValue
}

export const Filters: React.FC<Props> = ({ onFilterChange, filterSelected }) => {
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a
                className={className}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FiltersValue)
                }}
                href={href}
              >{literal}</a>
            </li>
          )
        })
      }
    </ul>
  )
}
