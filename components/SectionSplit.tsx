import React from 'react'

type Props = {
	children: React.ReactNode
}

const SectionSplit: React.FC<Props> = ({ children }) => {
	return (
		<div className="md:py-32 py-8 space-y-12 md:space-y-32">
			{children}
		</div>
	)
}

export default SectionSplit
