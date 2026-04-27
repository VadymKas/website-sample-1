'use client'

import Overlay from '@/components/Overlay'
import { cn } from '@/utilities/ui'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const images = ['/Hero/hero.jpg', '/Hero/hero2.jpg', '/Hero/hero3.jpg']

const HeroCarousel = () => {
	const [currentIndex, setCurrentIndex] = React.useState(0)
	const scrollYRef = useRef(0)
	const containerRef = useRef<HTMLDivElement | null>(null)

	const handleImageChange = (newIndex: number) => {
		if (newIndex !== currentIndex) {
			setCurrentIndex(newIndex)
		}
	}

	useEffect(() => {
		if (!images?.length) return

		const intervalId = setTimeout(() => {
			handleImageChange((currentIndex + 1) % images.length)
		}, 5000)
		return () => clearTimeout(intervalId)
	}, [currentIndex])

	useEffect(() => {
		const handleScroll = () => {
			scrollYRef.current = window.scrollY
			if (containerRef.current) {
				requestAnimationFrame(() => {
					const speed = 0.5
					containerRef.current!.style.transform = `translateY(${scrollYRef.current * speed}px)`
				})
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<div
				ref={containerRef}
				className="absolute inset-0 overflow-hidden">
				{images.map((img, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-all duration-1000 ${index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}>
						<Image
							src={img}
							alt={`Hero image ${index + 1}`}
							fill
							className="object-cover object-center"
							priority={index === currentIndex}
						/>
					</div>
				))}
			</div>
			<Overlay />
			<div className="absolute right-4 bottom-4 z-40">
				<div className="flex gap-2">
					{images?.map((_, index) => (
						<button
							key={index}
							onClick={() => handleImageChange(index)}
							className={cn(
								'w-12 h-2 rounded-full transition-all duration-300 shadow cursor-pointer',
								currentIndex === index
									? 'bg-theme'
									: 'bg-white hover:bg-theme/50'
							)}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default HeroCarousel
