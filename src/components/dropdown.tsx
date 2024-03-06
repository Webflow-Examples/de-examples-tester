import React, { ChangeEvent } from 'react'

interface DropdownProps {
  options: { value: string; label: string }[]
  selectedValue: string
  onValueChange: (value: string) => void
}

function Dropdown({ options, selectedValue, onValueChange }: DropdownProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onValueChange(event.target.value)
  }

  return (
    <div>
      <select value={selectedValue} onChange={handleChange} className={`w-input`}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
