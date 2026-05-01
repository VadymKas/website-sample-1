import EmblaCarousel from '@/components/Carousel/EmblaCarousel'
import Container from '@/components/Container'
import SectionName from '@/components/SectionName'
import React from 'react'

const Projects = () => {
	return (
		<section>
			<Container>
				<SectionName name="projects" />
				<EmblaCarousel slides={images} />
			</Container>
		</section>
	)
}

export default Projects

const images = ['/Hero/hero.jpg', '/Hero/hero2.jpg', '/Hero/hero3.jpg']
