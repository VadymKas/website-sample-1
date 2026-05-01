import Button from '@/components/Button'
import Container from '@/components/Container'
import SectionName from '@/components/SectionName'
import Image from 'next/image'
import React from 'react'

const Career = () => {
	return (
		<section>
			<Container>
				<SectionName name="career" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h2 className="mb-4">JOIN OUR TEAM</h2>
						<Image
							src="/Career/worker.jpg"
							alt="worker"
							sizes="100vw"
							width={0}
							height={0}
							className="h-auto w-full md:hidden mb-4"
						/>
						<div className="space-y-4 mb-8">
							<p>
								We are always looking for talented individuals
								to join our team. If you&apos;re passionate about
								what you do and eager to make an impact, we&apos;d
								love to hear from you.
							</p>
							<p>
								Check out our current openings below and see
								where you might fit in. We offer a collaborative
								environment, opportunities for growth, and the
								chance to work on meaningful projects.
							</p>
							<p>
								Don&apos;t see a position that fits your skills?
								Send us your resume anyway! We&apos;re always open to
								connecting with great people and may have future
								opportunities that align with your experience.
							</p>
						</div>
						<Button />
					</div>
					<div className="relative hidden md:block mb-4">
						<Image
							src="/Career/worker.jpg"
							alt="worker"
							sizes="100vw"
							width={0}
							height={0}
							className="h-auto w-full"
						/>
						<Image
							src="/Career/dots.png"
							alt="dots"
							width={200}
							height={200}
							className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2"
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Career
