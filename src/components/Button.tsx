import React from 'react'

type ButtonType = {
	type: 'button' | 'submit'
	children: string
	className?: string
	id?: string
	onClick: () => void
	value: string
}
const Button = ({ type, children, className, onClick }: ButtonType) => {
	return (
		<div className={className}>
			<button type={type} onClick={onClick}>
				{children}
			</button>
		</div>
	)
}

export default Button
