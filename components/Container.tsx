import React from 'react'

type Props = {
	className?: string
	children: React.ReactNode
}

const Container: React.FC<Props> = ({ className, children }) => {
	return (
		<div className={`container lg:max-w-6xl px-4 mx-auto ${className}`}>
			{children}
		</div>
	)
}

export default Container
