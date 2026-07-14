import {type FC} from "react"

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary'
}

interface CardProps {
	width?: string
	height?: string
	variant: CardVariant
	children: React.ReactNode
}

const Card : FC<CardProps> = 
	({
		width,
		height,
		variant,
		children
	}) => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
			{children}
			<div style={{width, height, background: 'yellow', border: variant === CardVariant.outlined ? '4px solid gray' : 'none'}}>
			$ -- Card -- $
			</div>
		</div>
	)
}

export default Card