import React from 'react'

type Props = {
	name: string
	id?: string
}

const SectionName: React.FC<Props> = ({ name, id }) => {
	return (
		<div
			id={id}
			className="flex gap-4 items-center  mb-8">
			<div className="h-1 w-10 bg-theme"></div>
			<p className="uppercase">{name}</p>
		</div>
	)
}

export default SectionName
