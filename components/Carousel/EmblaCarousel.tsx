'use client'

import React, { useMemo } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
	NextButton,
	PrevButton,
	usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'

type Slide = {
	image: string
	title: string
	link: string
}

type PropType = {
	slides: string[] | Slide[]
	options?: EmblaOptionsType
}

const EmblaCarousel = (props: PropType) => {
	const { slides, options } = props

	const autoplay = useMemo(
		() =>
			Autoplay({
				delay: 3000,
				stopOnInteraction: false
			}),
		[]
	)

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			...options
		},
		[ClassNames(), autoplay]
	)

	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons(emblaApi)

	return (
		<div className="embla">
			<div
				className="embla__viewport"
				ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slide, index) => (
						<div
							className="embla__slide overfllow-hidden h-100"
							key={`slide.${index}`}>
							{typeof slide === 'string' ? (
								<Image
									className="embla__slide__img"
									src={slide}
									alt="carousel image"
									fill
								/>
							) : (
								<Link href={slide.link}>
									<Image
										className="embla__slide overfllow-hidden h-100"
										src={slide.image}
										alt="carousel image"
										fill
									/>
									<h3 className="font-semibold absolute left-8 bottom-4 inline-block text-white bg-gradient-to-r from-black to-transparent p-2">
										{slide.title}
									</h3>
								</Link>
							)}
						</div>
					))}
				</div>
			</div>

			<div className="embla__controls">
				<div className="embla__buttons">
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div>

				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={'embla__dot'.concat(
								index === selectedIndex
									? ' embla__dot--selected'
									: ''
							)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default EmblaCarousel
