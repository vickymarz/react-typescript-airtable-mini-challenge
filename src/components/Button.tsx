import React from 'react'

type buttonProp = {
  type: string
  onClick: Function
  className: string
  children: string
}

const Button = (props:buttonProp) => {
	return (
		<div className={props.className}>
			<button type={props.type} onClick={props.onClick}>
				{props.children}
			</button>
		</div>
	)
}

export default Button