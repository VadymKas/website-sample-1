import { cn } from '@/utilities/ui'
import Link from 'next/link'
import React from 'react'

type Props = {
	className?: string
	children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({ className, children, ...rest }) => {
	return (
		<button
			className={cn(
				'px-16 py-4 bg-theme text-white text-xl w-full md:w-auto cursor-pointer',
				className
			)}
			{...rest}>
			{children ? children : <Link href="/">Contact us</Link>}
		</button>
	)
}

export default Button
