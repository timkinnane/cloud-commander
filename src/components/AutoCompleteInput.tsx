import React, { SFC, useEffect, useState } from 'react'
import { Text } from 'ink'
import AutoComplete from 'ink-autocomplete'
import { VoidCallback } from '../types'

export interface AutoCompleteItem { label: string, value: any }

interface AutoCompleteProps {
  value: any
  placeholder?: string
  prompt?: string
  status?: string
  items: Item[]
  onSubmit: VoidCallback
  onBlur: VoidCallback
  onChange: VoidCallback
  onFocus: VoidCallback
}

export const AutoCompleteInput: SFC<AutoCompleteProps> = ({
  prompt,
  status,
  onSubmit,
  onBlur,
  onChange,
  onFocus,
  ...props
}) => {
  useEffect(() => {
    onFocus()
  }, [onFocus, onBlur])
  const [, setValue] = useState()
  const [selected, setSelected] = useState<Item>()

  return (
    <>
      <Text green>{prompt || 'Enter selection'}: </Text>
      <AutoComplete
        {...props}
        onChange={(value: any) => {
          setValue(value)
          onChange(value)
        }}
        onSubmit={(selected: Item) => {
          setSelected(selected)
          onSubmit(selected)
        }}
      />
      { selected && (
        <span>
          <Text>{status || 'Current selection'}: </Text>
          <Text red>{selected.value}</Text>
        </span>
      )}
    </>
  )
}
