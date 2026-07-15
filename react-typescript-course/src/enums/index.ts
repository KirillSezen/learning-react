export const CardVariant = {
	outlined: 'outlined',
	primary: 'primary'
} as const

export type CardVariantType = typeof CardVariant[keyof typeof CardVariant]