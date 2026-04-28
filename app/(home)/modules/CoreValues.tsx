import Image from 'next/image'
import React from 'react'

const CoreValues = () => {
	return (
		<section className="bg-neutral-950 text-white">
			<div className="grid grid-cols-1 md:grid-cols-3">
				{data.map((item, index) => {
					const isSecond = index === 1

					return (
						<div
							key={index}
							className={`flex flex-col items-center p-8 ${isSecond && 'bg-theme text-black'}`}>
							<div className="flex flex-col items-center gap-4 text-center">
								<div
									className={`size-20 border-2 ${isSecond ? 'border-black' : 'border-white'} rounded-full flex items-center justify-center`}>
									<Image
										src={item.img}
										alt="icon"
										width={34}
										height={34}
									/>
								</div>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default CoreValues

const data = [
	{
		img: '/CoreValues/excellence.png',
		title: 'Innovation',
		description:
			'We embrace creativity and continuously seek new ways to solve problems and improve our products.'
	},
	{
		img: '/CoreValues/innovation.png',
		title: 'Collaboration',
		description:
			'We believe in the power of teamwork and open communication to achieve our goals and create a positive work environment.'
	},
	{
		img: '/CoreValues/customer.png',
		title: 'Integrity',
		description:
			'We are committed to honesty, transparency, and ethical behavior in all our interactions with customers, partners, and employees.'
	}
]
