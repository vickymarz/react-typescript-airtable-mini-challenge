import React from 'react'
import { InputProps } from './elements.types'

const Input = ({ type, name, value, className, id, onChange }: InputProps) => {
	return (
		<>
			<input
				type={type}
				name={name}
				value={value}
				className={className}
				id={id}
				onChange={onChange}
				required
			/>
		</>
	)
}

export default Input
