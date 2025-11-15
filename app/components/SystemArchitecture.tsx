'use client';

import { motion } from 'framer-motion';
import { title } from 'process';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
				>
					Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Pressure Sensor PCB and Enclosure Design',
							description:
								'Designed and assembled a custom RP2040-based PCB with dual DPS368 pressure sensors, developed bare-metal C firmware, and created a gasket-sealed enclosure for accurate airflow measurements.',
							image: '/pressure-sensor-board.png',
							details: [
								'Developed bare-metal C firmware using the Pico SDK to poll sensors over I2C and expose readings through a shared register interface.',
								'Verified and refined PCB design in KiCAD, improving signal integrity and sensor accuracy.',
								'Created a gasket-sealed airtight enclosure in Autodesk Inventor with venturi manifold ports for stable airflow calibration.',
							],
							tech: ['C', 'RP2040', 'KiCAD', 'Autodesk Inventor', 'I2C', 'Embedded Systems'],
						},
						{
							title: 'Mario Kart 8 Deluxe Leaderboard Web App',
							description:
								'Developed a Flask-based leaderboard web app where players can upload and compare time trial records for Mario Kart 8 Deluxe, with backend data stored in PostgreSQL.',
							link: 'https://mk8dxleaderboard.com',
							repo: 'https://github.com/lucastidy/mk8-deluxe-leaderboard',
							image: '/mk8dx-portfolio.jpg',
							details: [
								'Built using Flask and PostgreSQL for a scalable backend.',
								'Designed responsive UI with modular Jinja2 templates and custom CSS components.',
								'Implemented user authentication, leaderboard rendering, and screenshot-based validation.',
								'Deployed on AWS Elastic Beanstalk using Docker and automated CI/CD via GitHub Actions.',
							],
							tech: ['Python', 'Flask', 'PostgreSQL', 'AWS', 'Docker', 'GitHub Actions', 'HTML/CSS', 'Jinja2'],
						},
						{
							title: 'F1TENTH Autonomous Car',
							description:
								'Developed a ROS2-based control stack for a 1/10th scale autonomous F1 car, integrating LiDAR and depth cameras for real-time perception and control.',
							image: '/f1tenth.png',
							details: [
								'Achieved 0% crash rate and 100% obstacle detection in closed-loop testing.',
								'Implemented PID wall following, gap following, and automatic emergency braking using Python and ROS2.',
								'Developed a sensor fusion pipeline combining LiDAR and depth camera data via NumPy and OpenCV.',
								'Built a ROS2 lap-detection node using visual similarity for sub-second accurate lap timing.',
							],
							tech: ['Python', 'ROS2', 'LiDAR', 'OpenCV', 'NumPy', 'Linux'],
						},
						{
						title: 'Audio Signal Verification with UVM - Current Project',
						description: 'Learning UVM by building a simple RTL module that computes per-frame peak and RMS from an audio stream and triggers interrupts on threshold exceed using SystemVerilog.',
						image: '/audio-uvm.png',
						repo: 'https://github.com/lucastidy/audio-peak-rms-analyzer',
						details: [
							'AXI-Stream input interface with 16-bit signed samples',
							'Real-time peak and RMS calculation with programmable thresholds',
							'Interrupt output when thresholds exceeded',
							'RTL + UVM-style testbench including constrained-random stimulus, scoreboard comparisons, functional coverage, and SVA assertions',
						],
						tech: ['SystemVerilog', 'UVM', 'RTL', 'AXI-Stream', 'ModelSim', 'Quartus'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-white dark:bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
							{project.image && (
								<div className="overflow-hidden w-full mb-4">
								<img
									src={project.image}
									alt=""
									className="block h-auto object-contain max-w-[90%] sm:max-w-[80%] md:max-w-[50%] lg:max-w-[50%] xl:max-w-[60%]"
								/>
								</div>
							)}
							<p className="text-gray-600 dark:text-gray-400 mb-2">{project.description}</p>
							<p className="text-gray-700 dark:text-gray-300 mb-4">
							{project.link && (
								<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline dark:text-blue-400"
								>
								Live here!
								</a>
							)}
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-6 gap-4 mb-4">
							{project.repo && (
								<a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 p-2 bg-gray-200 dark:bg-gray-700/50 rounded-lg
											group hover:bg-gray-300 dark:hover:bg-gray-600/50 transition-colors"
								>
									<svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
									<div>
									<p className="text-sm text-white-600 hover:underline dark:text-white-400">
										View the repo
									</p>
									</div>
								</a>
							)}
							</div>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 text-blue-800 dark:text-blue-300 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
