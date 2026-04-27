'use client'

import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import Button from './Button'

const ScrollDownButton = () => {
	const handleScrollDown = () => {
		window.scrollBy({
			top: window.innerHeight - 64,
			behavior: 'smooth'
		})
	}

	return (
		<Button
			className="w-fit! rounded-full p-2 bg-transparent text-white border-2 border-white shadow-lg animate-bounce hover:bg-transparent"
			onClick={handleScrollDown}>
			<FaArrowDown size="24" />
		</Button>
	)
}

export default ScrollDownButton
