import React, { FC, useEffect } from 'react'
import InkSelectInput, { InkSelectInputProps } from 'ink-select-input'
import { VoidCallback } from '../types'

interface SelectProps extends InkSelectInputProps {
	/** Function to with submitted value. */
	onSubmit: VoidCallback
	/** Function to apply when field exited. */
	onBlur: VoidCallback
	/** Function to apply when selection changes. */
	onChange: VoidCallback
	/** Function to apply when field entered. */
  onFocus: VoidCallback,
}

export const SelectInput: FC<SelectProps> = ({ onSubmit, onBlur, onChange, onFocus, ...props }) => {
	useEffect(() => {
		onFocus()
  }, [onFocus, onBlur])

	return (
		<InkSelectInput
			{...props}
			onSelect={({ value }) => {
				onChange(value)
				onSubmit()
			}}
		/>
	)
}
