import React from 'react'
import { ButtonProps } from './elements.types'

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
