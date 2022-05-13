import React from 'react'

type ButtonProps = {
	type: 'button' | 'submit'
	children: string
	className?: string
	id?: string
	onClick: () => void
	value: string
}
const Button = ({ type, children, className, onClick }: ButtonProps) => {
	return (
		<div className={className}>
			<button type={type} onClick={onClick}>
				{children}
			</button>
		</div>
	)
}

export default Button
