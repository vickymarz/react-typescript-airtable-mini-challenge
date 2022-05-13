import React from "react"

export type ButtonProps = {
	type: 'button' | 'submit'
	children: React.ReactNode
	className?: string
	id?: string
	onClick: () => void
}

export type InputProps = {
	type: string
	name: string
	className?: string
	id?: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	value: string
}