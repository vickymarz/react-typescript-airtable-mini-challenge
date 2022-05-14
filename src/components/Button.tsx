import { resolvePtr } from 'dns'
import React from 'react'
import { ButtonProps } from './elements.types'

const Button = ({ children,  className, ...rest}: ButtonProps) => {
	return (
		<div className={className}>
			<button {...rest}>
				{children}
			</button>
		</div>
	)
}

export default Button
