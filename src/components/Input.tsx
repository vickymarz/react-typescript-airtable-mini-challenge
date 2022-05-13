import React from 'react'

type InputProps = {
	type: string
	name: string
	className?: string
	id?: string
	onChange: () => void
	value: string
}

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
