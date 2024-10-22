"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
		<motion.div 
		 className="h-full" 
		 initial={{y:"-200vh"}} 
		 animate={{y:"0%"}} 
		 transition={{ duration: 1}}>
			<div className='lg:flex-row h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:48'>
				{/* IMAGE CONTAINER */}
				<div className='lg:h-full lg:w-1/2 h-1/2 relative px-4 sm:px-8 md:px-12 lg:px-20 xl:48'>
					<Image src='/hero.png' alt='' fill className='object-contain' />
				</div>
				{/* TEXT CONTAINER */}
				<div className='lg:h-full lg:w-1/2 h-1/2 flex flex-col gap-8 items-center justify-center'>
					{/* TITLE */}
					<h1 className='text-4xl md:text-6xl font-bold'>
						Crafting Digital Experience, Designing Tomorrow.
					</h1>
					{/* DESC */}
					<p className='md:text-xl'>
						We create visually stunning websites, mobile apps, and digital
						experiences that are not only functional but also aesthetically
						pleasing.
					</p>
					{/* BUTTONS */}
					<div className='w-full flex gap-4'>
						<button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>
							View My Work
						</button>
						<button className='p-4 rounded-lg ring-1 ring-black'>
							Contact Me
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	)
};

export default Homepage;
