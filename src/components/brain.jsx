"use client"

import Link from "next/link"
import { motion, useTransform } from "framer-motion"

const Brain = ({scrollYProgress}) => {

  const rotateForward = useTransform(scrollYProgress, [0, 1], [0, 360])

	return <div className='h-full w-full'>
		  Brain
		</div>
}

export default Brain