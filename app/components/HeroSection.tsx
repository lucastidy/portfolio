'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 dark:opacity-10 opacity-0" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:invert-0 invert" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-lg"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-600 dark:text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900 dark:text-white">Lucas Tidy</h1>
						<p className="text-green-600 dark:text-green-500 mt-2 mb-2">$ about --me</p>
						<p className="text-gray-600 dark:text-gray-400 mb-2">Third-year Computer Engineering student at UBC with interests 
							spanning embedded systems, digital design, and full-stack development. I enjoy tackling problems across 
							the hardware-software stack. Whether it&apos;s designing PCBs and writing firmware in C, 
							implementing digital logic on FPGAs, or building cloud-based web applications.
							Currently diving deeper into FPGA verification, learning UVM and applying it to 
							past and current personal projects. 
							Always looking for opportunities to learn, build, and collaborate on challenging technical problems.</p>
							<p className="text-green-600 dark:text-green-500">$ cat --projects</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
