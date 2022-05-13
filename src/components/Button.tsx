import React from 'react'

const Button = (props: React.ComponentProps<'button'>) => {
	return (
		<div className={props.className}>
			<button type={props.type} onClick={props.onClick}>
				{props.children}
			</button>
		</div>
	)
}

export default Button