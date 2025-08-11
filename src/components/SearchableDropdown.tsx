import React, { useState, useRef, useEffect } from 'react'
import type { DynamicEnumValue } from '../types/dynamic-enums'
import { isDynamicEnumValue } from '../types/dynamic-enums'

interface SearchableDropdownProps {
  options: Array<string | DynamicEnumValue>
  value: string | DynamicEnumValue | undefined
  onChange: (value: string | DynamicEnumValue) => void
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  className?: string
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Search...',
  disabled = false,
  loading = false,
  className = 'w-select',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredOptions, setFilteredOptions] = useState(options)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Filter options based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredOptions(options)
    } else {
      const filtered = options.filter((option) => {
        const displayName = typeof option === 'string' ? option : option.name
        return displayName.toLowerCase().includes(searchTerm.toLowerCase())
      })
      setFilteredOptions(filtered)
    }
  }, [searchTerm, options])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleToggle = () => {
    if (!disabled && !loading) {
      setIsOpen(!isOpen)
      if (!isOpen) {
        setSearchTerm('')
      }
    }
  }

  const handleOptionSelect = (option: string | DynamicEnumValue) => {
    onChange(option)
    setIsOpen(false)
    setSearchTerm('')
  }

  const getDisplayValue = () => {
    if (!value) return ''
    if (typeof value === 'string') return value
    if (isDynamicEnumValue(value)) return value.name
    return ''
  }

  const getOptionDisplay = (option: string | DynamicEnumValue) => {
    if (typeof option === 'string') return option
    if (isDynamicEnumValue(option)) return option.name
    return ''
  }

  const getOptionValue = (option: string | DynamicEnumValue) => {
    if (typeof option === 'string') return option
    if (isDynamicEnumValue(option)) return option.id
    return ''
  }

  return (
    <div className="searchable-dropdown" ref={dropdownRef}>
      {/* Display button */}
      <button
        type="button"
        onClick={handleToggle}
        className={`${className} flex items-center justify-between w-full text-left ${
          disabled || loading
            ? 'opacity-50 cursor-not-allowed'
            : 'cursor-pointer'
        }`}
        disabled={disabled || loading}
      >
        <span className={getDisplayValue() ? '' : 'text-gray-500'}>
          {loading ? 'Loading...' : getDisplayValue() || placeholder}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="dropdown-menu">
          {/* Search input */}
          <div className="search-input">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type to search..."
            />
          </div>

          {/* Options list */}
          <div className="options-list">
            {filteredOptions.length === 0 ? (
              <div className="no-options">No options found</div>
            ) : (
              filteredOptions.map((option, index) => {
                const displayName = getOptionDisplay(option)
                const optionValue = getOptionValue(option)
                const isSelected =
                  (typeof value === 'string' && value === optionValue) ||
                  (isDynamicEnumValue(value) &&
                    isDynamicEnumValue(option) &&
                    value.id === option.id)

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleOptionSelect(option)}
                    className={`option-item ${isSelected ? 'selected' : ''}`}
                  >
                    {displayName}
                  </button>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchableDropdown
