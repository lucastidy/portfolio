'use client';

import './globals.css';
import { useTheme, ThemeProvider } from './components/theme/ThemeProvider';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata: Metadata = {
	title: '[Lucas Tidy] - Computer Engineering Student',
	description:
		'Welcome to my portfolio! I am a passionate computer engineering student with a keen interest in embedded systems, digital design, and full-stack development. Explore my projects and skills.',
	keywords: [
		'Backend Developer',
		'Hardware Engineer',
		'Embedded Systems Engineer',
		'FPGA Engineer',
		'Verification Engineer',
		'Embedded Systems',
		'SystemVerilog',
		'UVM',
		'Digital Design',
		'C',
		'C++',
		'Microcontrollers',
		'Verilog',
		'PCB Design',
		'PCB Assembly',
		'Firmware Development',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'[Lucas Tidy]',
		'KiCAD',
		'Python',
		'Java',
		'Distributed Systems',
		'System Design',
		'Backend Architecture',
	],
	authors: [{ name: '[Lucas Tidy]' }],
	creator: '[Lucas Tidy]',
	openGraph: {
		title: '[Lucas Tidy] - Portfolio',
		description: 'Passionate computer engineering student with a keen interest in embedded systems, digital design, and full-stack development. Explore my projects and skillset.',
		url: 'https://your-domain.com',
		siteName: '[Lucas Tidy] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Lucas Tidy] - Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Lucas Tidy] - Computer Engineering Student',
		description: 'Passionate computer engineering student with a keen interest in embedded systems, digital design, and full-stack development. Explore my projects and skillset.',
		creator: '@lucastidy',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}; 

function RootLayout({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme();

	return (
		<html lang="en" className={theme} suppressHydrationWarning>
			<body>
				<div className="antialiased">{children}</div>
			</body>
		</html>
	);
}

export default function BackendDeveloperLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider>
			<RootLayout>
				{children}
				<Analytics />
			</RootLayout>
		</ThemeProvider>
	);
}
