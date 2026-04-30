import Container from '@/components/Container'
import SectionName from '@/components/SectionName'
import React from 'react'

const AboutUs = () => {
	return (
		<section>
			<Container>
				<SectionName name="About Us" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
					<h2 className="font-medium">
						OUR TEAM IS READY TO BUILD YOUR DREAMS
					</h2>
					<p>
						We are a passionate team of professionals dedicated to
						turning your ideas into reality. With years of
						experience and a commitment to excellence, we strive to
						deliver exceptional results that exceed your
						expectations.
					</p>
				</div>
				<div className="relative">
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100" />
					<video
						src="/AboutUs/home_video.mp4"
						autoPlay
						loop
						muted
						className="object-cover h-52 md:h-112.5 w-full"
					/>
				</div>
				<div className="grid grid-cols-2 md:flex justify-between gap-4 md:gap-8 mt-4">
					{data.map(item => (
						<div
							key={item.title}
							className="text-center">
							<h2 className="mb-2 text-theme font-semibold">
								{item.title}
							</h2>
							<p className="text-sm">{item.description}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default AboutUs

const data = [
	{
		title: '20+',
		description: 'YEARS OF EXPERIENCE'
	},
	{
		title: '250+',
		description: 'PROJECTS COMPLETED'
	},
	{
		title: '55+',
		description: 'MILLION EUROS IN REVENUE'
	},
	{
		title: '30+',
		description: 'EMPLOYEES WORLDWIDE'
	}
]
