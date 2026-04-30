import React from 'react'
import Container from '@/components/Container'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import SectionName from '@/components/SectionName'

const Services = () => {
	return (
		<section>
			<Container>
				<SectionName name="services" />
				<div className="grid grid-cols-1 md:grid-cols-3 text-white">
					{data.map(({ title, href, description }, index) => {
						const isSecond = index === 1
						return (
							<div
								key={title}
								className={`flex flex-col justify-between px-4 md:px-8 py-8 md:py-8 space-y-12 ${isSecond ? 'bg-white text-black' : 'bg-theme'}`}>
								<h3>0{index + 1}.</h3>
								<h3>{title}</h3>
								<p>{description}</p>

								<div className="flex justify-between">
									<Link href={href}>
										<button
											className={`border-2 ${isSecond ? 'border-black' : 'border-white'} p-4 inline-block cursor-pointer`}>
											<FaArrowRight size={24} />
										</button>
									</Link>
									<div
										className={`relative rounded-lg w-16 h-full border-2 ${isSecond ? 'bg-theme border-theme' : 'bg-white border-white'}`}>
											<div className={`absolute w-full h-full right-2 bottom-2 ${isSecond ? 'bg-white' : 'bg-theme'}`}></div>
										</div>
								</div>
							</div>
						)
					})}
				</div>
			</Container>
		</section>
	)
}

export default Services

const data = [
	{
		title: 'GENERAL CONTRACTING',
		href: '/services/general-contracting',
		description:
			'We provide comprehensive general contracting services, overseeing every aspect of your construction project from start to finish. Our experienced team manages all phases of the construction process, ensuring that your project is completed on time, within budget, and to the highest standards of quality.'
	},
	{
		title: 'RENOVATION AND RESTORATION',
		href: '/services/renovation-and-restoration',
		description:
			"Our renovation and restoration services breathe new life into your existing spaces. Whether you're looking to update a single room or undertake a full-scale renovation, our skilled team works closely with you to transform your vision into reality while preserving the unique character of your property."
	},
	{
		title: 'MONOLITHIC CONSTRUCTION',
		href: '/services/monolithic-construction',
		description:
			'Our monolithic construction services utilize advanced techniques to create seamless, durable structures. This method involves pouring concrete in a single, continuous process, resulting in stronger and more energy-efficient buildings. We specialize in monolithic construction for both residential and commercial projects, delivering exceptional results that stand the test of time.'
	}
]
