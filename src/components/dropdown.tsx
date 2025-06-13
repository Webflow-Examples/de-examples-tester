import React from 'react'
import type { ChangeEvent } from 'react'

interface DropdownProps {
  options: {
    value: string
    label: string
    subcategories?: { value: string; label: string }[]
  }[]
  selectedValue: string
  onValueChange: (value: string) => void
  disabled: boolean
  placeholder?: string
}

function Dropdown({
  options,
  selectedValue,
  onValueChange,
  disabled,
  placeholder = 'Select an option',
}: DropdownProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!disabled) {
      onValueChange(event.target.value)
    }
  }

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleChange}
        className={`w-select ${disabled ? 'disabled' : ''}`}
        style={{
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        disabled={disabled}
      >
        <option value="">{placeholder}</option>
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
