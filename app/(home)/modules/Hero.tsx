import React from 'react'
import Button from '@/components/Button'
import Container from '@/components/Container'
import Image from 'next/image'
import StarImg from '@/public/star.png'
import HeroCarousel from './HeroCarousel'
import ScrollDownButton from '@/components/ScrollDownButton'

const Hero = () => {
	return (
		<div className="relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
			<HeroCarousel />
			<Container className="relative z-10 flex flex-col justify-between h-full text-white">
				<div />
				<div>
					<div className="flex gap-2">
						<div className="flex items-center gap-0.5">
							{[...Array(5)].map((_, i) => (
								<Image
									key={`star-${i}`}
									src={StarImg}
									alt="Star image"
									width={16}
									height={16}
								/>
							))}
						</div>
						<p className="text-sm text-white font-bold">
							25+ successful projects
						</p>
					</div>

					<h1 className="my-4 font-bold">
						WE BUILD WITH <br />
						<span className="text-theme">PRECISION</span>
					</h1>

					<p className="mb-8 md:max-w-3xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Alias rerum facilis magni et, eligendi iure adipisci
						reiciendis explicabo est ex saepe aperiam ut molestias
						deserunt necessitatibus doloribus culpa! Quaerat,
						inventore!
					</p>
					<Button />
				</div>
				<ScrollDownButton />
			</Container>
		</div>
	)
}

export default Hero
