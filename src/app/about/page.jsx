"use client"

import { motion } from 'framer-motion'

import Image from 'next/image'

const AboutPage = () => {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			{/* CONTAINER */}
			<div className='h-full overflow-scroll lg:flex'>
				{/* TEXT CONTAINER */}
				<div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 xl:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
					{/* BIOGRAPHY CONTAINER */}
					<div className='flex flex-col gap-12 justify-center'>
						{/* BIOGRAPHY TITLE */}
						<h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
						{/* BIOGRAPHY DESC */}
						<p className='font-normal'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
							reiciendis optio sit porro cum? Sequi laborum sint ducimus? Eos
							quisquam tempore libero sequi, pariatur, sunt consectetur minus
							incidunt magni fuga repellendus error autem vero, ipsum repellat.
							Ducimus omnis labore voluptate.
						</p>
						{/* BIOGRAPHY QUOTE */}
						<span className='italic'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
							doloribus?
						</span>
						{/* BIOGRAPHY SIGN SVG */}
						<div className='self-end'>
							<svg
								width='240'
								height='39'
								viewBox='0 0 640 89'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M2 56C34.1428 58.5714 66.2094 62.1724 98.4444 63.5556C117.281 64.3638 144.893 65.0523 164.333 62.3333C172.196 61.2337 187.592 57.7596 194.111 50.8889C205.948 38.4132 181.378 31.2368 174.222 30.1111C162.939 28.3363 149.028 28.5718 137.889 31.5556C137.066 31.776 135.386 33.104 136.167 33.4444C139.512 34.9025 147.515 34.6667 149.611 34.6667C160.404 34.6667 171.637 34.1656 182.333 32.8889C190.482 31.9163 211.582 30.8476 215.333 19.8889C220.852 3.76809 186.107 3.01937 180.111 2.66667C173.301 2.26608 148.064 2 140.667 2C136.851 2 133.034 2.00213 129.222 2.16667C125.503 2.32723 123.483 2.28527 127.167 3.66667C128.62 4.21157 143.093 7.38203 139.778 9.72222C125.855 19.5504 106.415 20.2366 91.2778 27.6111C90.4221 28.028 88.6235 29.6959 89.5556 29.8889C96.2675 31.2789 103.214 31.082 110.056 31.5C150.077 33.945 190.133 35.7653 230.167 38C250.045 39.1096 312.087 42.677 338.5 44.2778C343.335 44.5708 349.118 42.3259 353 45.2222C355.972 47.4398 345.676 46.4005 342 46.8889C330.342 48.4376 318.675 49.9194 307 51.3333C230.402 60.6101 153.736 68.7919 76.8889 75.6667C65.1369 76.718 62.8184 76.8424 77 77C149.245 77.8027 221.478 78.182 293.722 79.3333C404.421 81.0975 515.111 83.4512 625.778 86.6667C648.212 87.3185 635.041 87 630 87'
									stroke='black'
									stroke-width='3'
									stroke-linecap='round'
								/>
							</svg>
						</div>
						{/* BIOGRAPHY SCROLL SVG */}
						<div className='self-start'>
							<Image
								src='/arrow-mouse.svg'
								width={64}
								height={64}
								alt='arrow'
								className='object-contain'
							/>
						</div>
					</div>
					{/* SKILLS CONTAINER */}
					<div className='flex flex-col gap-12 justify-center'>
						{/* SKILL TITLE */}
						<h1 className='font-bold text-2xl'>SKILLS</h1>
						{/* SKILL LIST */}
						<div className='flex gap-4 flex-wrap'>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								HTML
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								CSS
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								JavaScript
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Node.js
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								MongoDB
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								React.js
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								Next.js
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								TypeScript
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								TypeScript
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								TypeScript
							</div>
							<div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
								TypeScript
							</div>
						</div>
						{/* SKILL SCROLL SVG */}
						<div className='self-start'>
							<Image
								src='/arrow-mouse.svg'
								width={64}
								height={64}
								alt='arrow'
								className='object-contain'
							/>
						</div>
					</div>
					{/* EXPERIENCE CONTAINER */}
					<div className='flex flex-col gap-12 justify-center pb-48'>
						{/* EXPERIENCE TITLE */}
						<h1 className='font-bold text-2xl'>EXPERIENCE</h1>
						{/* EXPERIENCE LIST */}
						<div className=''>
							{/* EXPERIENCE LIST ITEM 1 */}
							<div className='flex justify-between h-48'>
								{/* LEFT */}
								<div className='w-1/3'>
									{/* JOB TITLE */}
									<div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
										Senior JavaScript Engineer
									</div>
									{/* JOB DESC */}
									<div className='p-3 text-sm italic'>
										My current employment. Way better than the position before!
									</div>
									{/* JOB DATE */}
									<div className='p-3 text-red-400 text-sm font-semibold'>
										2024 - Present
									</div>
									{/* JOB COMPANY */}
									<div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
										Apple111
									</div>
								</div>
								{/* CENTER */}
								<div className='w-1/6'>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 relative'>
										{/* LINE CURCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className='w-1/3'></div>
							</div>

							{/* EXPERIENCE LIST ITEM 3 */}
							<div className='flex justify-between h-48'>
								{/* LEFT */}
								<div className='w-1/3'>{/* JOB TITLE */}</div>
								{/* CENTER */}
								<div className='w-1/6'>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 relative'>
										{/* LINE CURCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className='w-1/3'>
									<div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
										Senior JavaScript Engineer
									</div>
									{/* JOB DESC */}
									<div className='p-3 text-sm italic'>
										My current employment. Way better than the position before!
									</div>
									{/* JOB DATE */}
									<div className='p-3 text-red-400 text-sm font-semibold'>
										2024 - Present
									</div>
									{/* JOB COMPANY */}
									<div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
										Apple222
									</div>
								</div>
							</div>
							<div className='flex justify-between h-48'>
								{/* LEFT */}
								<div className='w-1/3'>
									{/* JOB TITLE */}
									<div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
										Senior JavaScript Engineer
									</div>
									{/* JOB DESC */}
									<div className='p-3 text-sm italic'>
										My current employment. Way better than the position before!
									</div>
									{/* JOB DATE */}
									<div className='p-3 text-red-400 text-sm font-semibold'>
										2024 - Present
									</div>
									{/* JOB COMPANY */}
									<div className='p-1 rounded bg-white text-sm font-semibold w-fit'>
										Apple333
									</div>
								</div>
								{/* CENTER */}
								<div className='w-1/6'>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 relative'>
										{/* LINE CURCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className='w-1/3'></div>
							</div>
						</div>
					</div>
				</div>
				{/* SVG CONTAINER */}
				<div className='hidden lg:block w-1/3 xl:1/2'></div>
			</div>
		</motion.div>
	)
}

export default AboutPage
