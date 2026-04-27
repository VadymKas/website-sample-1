import React from 'react'

type Props = {
	className?: string
	children: React.ReactNode
}

const Container: FC<Props> = ({className, children}) => {
  return (
	<div className={`container lg:max-w-6xl px-4 mx-auto ${}`}>
		{children}
	</div>
  )
}

export default Container