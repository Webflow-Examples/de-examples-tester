import React, { ChangeEvent } from 'react'

interface DropdownProps {
  options: {
    value: string
    label: string
    subcategories?: { value: string; label: string }[]
  }[]
  selectedValue: string
  onValueChange: (value: string) => void
}

function Dropdown({ options, selectedValue, onValueChange }: DropdownProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onValueChange(event.target.value)
  }

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="w-select"
      >
        <option value="">Select an option</option>
        {options.map((option) =>
          option.subcategories ? (
            <optgroup key={option.value} label={option.label}>
              {option.subcategories.map((sub) => (
                <option
                  key={`${option.value}.${sub.value}`}
                  value={`${option.value}.${sub.value}`}
                >
                  {sub.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ),
        )}
      </select>
    </div>
  )
}

export default Dropdown
