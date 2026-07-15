import { useState, type FC, type ReactNode } from "react"
import type { CardVariantType } from "../enums"
import { CardVariant } from "../enums"

interface CardProps {
	width?: string
	height?: string
	variant: CardVariantType
	children?: ReactNode
	onClick: (numb: number) => void
}

const Card : FC<CardProps> = 
	({
		width,
		height,
		variant,
		children,
		onClick,
	}) => {
	const [num] = useState(0)

	return (
		<div onClick={() => onClick(num)} style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
			{children}
			<div style={{width, height, background: variant === CardVariant.primary ? 'yellow' : 'white', border: variant === CardVariant.outlined ? '4px solid gray' : 'none', }}>
			$ -- Card -- $
			</div>
		</div>
	)
}

export default Card