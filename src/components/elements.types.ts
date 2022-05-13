
export type ButtonProps = {
	type: 'button' | 'submit'
	children: string
	className?: string
	id?: string
	onClick: () => void
	value: string
}

export type InputProps = {
	type: string
	name: string
	className?: string
	id?: string
	onChange: () => void
	value: string
}