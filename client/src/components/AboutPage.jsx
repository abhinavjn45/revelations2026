import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import Footer from './Footer';

// Import faculty images from team folder
import DrSrideviImg from '../assets/images/team/Dr. Shidevi R.jpeg';
import DrShivangiImg from '../assets/images/team/Dr. Shivangi Singh.jpeg';
import DrSureshImg from '../assets/images/team/Dr. Suresh Kalaimani.jpeg';

// Import core committee images
import KripaDhandhaniaImg from '../assets/images/team/Kripa Dhandhania_CC_MCAA.png';
import EvanaImg from '../assets/images/team/Evana_CC_MCA_B.jpg';
import VanshikaImg from '../assets/images/team/Vanshika_CC_MscAIML.png';
import AdarshGuptaImg from '../assets/images/team/Adarsh Gupta_CC_MCA A.jpg';
import BhavyaImg from '../assets/images/team/bhavya.png';
import ChrisAsirImg from '../assets/images/team/Chris Asir Samuel _CC_MScAIML.png';

// Import website developer images
import HariPrasadImg from '../assets/images/team/Hari Prasad.png';
import DarshanHebleImg from '../assets/images/team/darshanheble.png';
import AbhinavJainImg from '../assets/images/team/abhinav.png';


const facultyCoordinators = [
	{
		name: 'Dr. Sridevi R',
		designation: 'Associate Professor',
		phrase: 'Guiding us through the Upside Down.',
		image: DrSrideviImg,
	},
	{
		name: 'Dr. Shivangi Singh',
		designation: 'Assistant Professor',
		phrase: 'Lighting the way for all.',
		image: DrShivangiImg,
	},
	{
		name: 'Dr. Suresh Kalaimani',
		designation: 'Assistant Professor',
		phrase: 'The mind behind the code.',
		image: DrSureshImg,
	},
];

const websiteDevelopers = [
	{
		name: 'Darshan Heble',
		class: '3 MCA A',
		phrase: 'Crafting portals to new worlds.',
		image: DarshanHebleImg,
	},
	{
		name: 'Hari Prasad',
		class: '3 MCA A',
		phrase: 'Animating the Upside Down.',
		image: HariPrasadImg,
	},
	{
		name: 'Abhinav Jain',
		class: '3 MCA B',
		phrase: 'Code, coffee, and curiosity.',
		image: AbhinavJainImg,
	},
];

const coreCommittee = [
	{
		name: 'Kripa Dhandhania',
		class: '3 MCA A',
		phrase: 'Master of the upside.',
		image: KripaDhandhaniaImg,
	},
	{
		name: 'Evana Joseph',
		class: '3 MCA B',
		phrase: 'Stranger things within.',
		image: EvanaImg,
	},
	{
		name: 'Vanshika Srinivas',
		class: '3 MSC AIML',
		phrase: 'The code whisperer.',
		image: VanshikaImg,
	},
	{
		name: 'Adarsh Gupta',
		class: '3 MCA A',
		phrase: 'Bringing order to chaos.',
		image: AdarshGuptaImg,
	},
	{
		name: 'Bhavya Dhanuka',
		class: '3 MCA B',
		phrase: 'The creative spark.',
		image: BhavyaImg,
	},
	{
		name: 'Chris Asir Samuel',
		class: '3 MSC AIML',
		phrase: 'Guardian of the gate.',
		image: ChrisAsirImg,
	},
];

const committeeHeads = [
	{ name: 'Annie Neena', role: 'Audi Management', phrase: '3 MCA B' },
	{ name: 'Binosh Sibi', role: 'Audi Management', phrase: '3 MSC AIML' },
	{ name: 'Shreya G', role: 'Culturals (Dance)', phrase: '3 MSC AIML' },
	{ name: 'Jai Pareek', role: 'Culturals (Dance)', phrase: '3 MCA B' },
	{ name: 'Aadharsh Krishnaa G', role: 'Culturals (Music)', phrase: '3 MCA B' },
	{ name: 'Omkaar Chakraborty', role: 'Culturals (Music)', phrase: '3 MCA B' },
	{ name: 'Bhagyashree Roy', role: 'Decorations', phrase: '3 MCA A' },
	{ name: 'Sheethal T Kochery', role: 'Decorations', phrase: '3 MSC AIML' },
	{ name: 'Kusum S', role: 'Designs', phrase: '3 MSC AIML' },
	{ name: 'Praneeth M', role: 'Designs', phrase: '3 MCA A' },
	{ name: 'Kanika Jain', role: 'Documentation', phrase: '3 MCA A' },
	{ name: 'Sharon Mathew', role: 'Documentation', phrase: '3 MCA B' },
	{ name: 'JV Baarathi', role: 'Events', phrase: '3 MSC AIML' },
	{ name: 'Abhinav Jain', role: 'Events', phrase: '3 MCA B' },
	{ name: 'Jariwala Mohit S', role: 'Finance', phrase: '3 MSC AIML' },
	{ name: 'Nishit Daruwala', role: 'Finance', phrase: '3 MSC AIML' },
	{ name: 'Ananya Pillai', role: 'Hospitality', phrase: '3 MSC AIML' },
	{ name: 'R Karan', role: 'Hospitality', phrase: '3 MCA B' },
	{ name: 'Ekta Singh', role: 'Infobahn', phrase: '3 MCA B' },
	{ name: 'Neha N', role: 'Infobahn', phrase: '3 MCA A' },
	{ name: 'Aimee Joseph', role: 'Logistics', phrase: '3 MCA B' },
	{ name: 'Joshua V. Praveen', role: 'Logistics', phrase: '3 MSC AIML' },
	{ name: 'Amogh Sahore', role: 'Media', phrase: '3 MCA A' },
	{ name: 'Deon Binny', role: 'Media', phrase: '3 MSC AIML' },
];


const techStack = [
	{ name: 'React', icon: 'https://skillicons.dev/icons?i=react', description: 'Frontend Library' },
	{ name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwind', description: 'Styling' },
	{ name: 'Framer Motion', icon: 'https://cdn.brandfetch.io/idDJv1mfrb/w/1080/h/1080/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1753779057992', description: 'Animations' },
	{ name: 'GSAP', icon: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*wGdP-ym3kqQopOA9us8nXg.jpeg', description: 'Animations' },
];

function ThemedTechCard({ name, icon, description }) {
	return (
		<motion.div
			whileHover={{ scale: 1.1, y: -5 }}
			className="flex flex-col items-center justify-center p-4 bg-[#18181b]/60 border border-red-900/30 rounded-xl shadow-md transition-all duration-300 hover:bg-[#1a0505]/80 hover:border-red-600/50 group"
		>
			<div className="mb-3 filter drop-shadow hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.6)] transition-all">
				<img
					src={icon}
					alt={name}
					className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 rounded-xl"
				/>
			</div>
			<div className="font-stranger text-lg text-red-400">{name}</div>
			<div className="font-typewriter text-xs text-gray-500">{description}</div>
		</motion.div>
	);
}

function ThemedCard({ image, name, designation, phrase, className }) {
	return (
		<motion.div
			whileHover={{ scale: 1.06, boxShadow: '0 0 32px #dc2626cc', y: -8 }}
			className={`group bg-[#18181b]/80 border border-red-900/40 rounded-xl shadow-lg p-5 flex flex-col items-center transition-all duration-300 hover:bg-[#1a0505]/90 ${className}`}
		>
			{image && (
				<img
					src={image}
					alt={name}
					className="w-24 h-24 object-cover rounded-full border-4 border-red-700 shadow-md mb-3 group-hover:scale-105 group-hover:border-red-500 transition-all duration-300"
				/>
			)}
			<div className="text-center">
				<div className="font-stranger text-xl text-red-400 mb-1 drop-shadow-md">{name}</div>
				{designation && <div className="font-typewriter text-sm text-gray-300 mb-1">{designation}</div>}
				{className && <div className="font-typewriter text-sm text-gray-400 mb-1">{className}</div>}
				<div className="font-typewriter text-xs text-gray-400 italic mt-1">{phrase}</div>
			</div>
		</motion.div>
	);
}

function ThemedHeadCard({ name, role, phrase }) {
	return (
		<motion.div
			whileHover={{ scale: 1.04, boxShadow: '0 0 24px #dc262699', y: -4 }}
			className="bg-[#18181b]/80 border border-red-900/30 rounded-xl shadow p-4 flex flex-col items-center transition-all duration-300 hover:bg-[#1a0505]/80"
		>
			<div className="font-stranger text-lg text-red-400 mb-1 drop-shadow">{name}</div>
			<div className="font-typewriter text-xs text-gray-300 mb-1">{role}</div>
			<div className="font-typewriter text-xs text-gray-400 italic mt-1">{phrase}</div>
		</motion.div>
	);
}

function OurTeamHeading() {
	return (
		<>
			<h1 className="font-stranger text-4xl md:text-6xl text-red-600 mb-6 text-center drop-shadow-lg tracking-widest">
				The Ones Behind the Signal
			</h1>
			<p className="font-typewriter text-gray-300 text-lg md:text-xl leading-relaxed mb-6 text-center">
				Get to know about the <span className="text-red-500 font-bold text-xl">WONDERFUL TEAM</span> behind <span className="text-red-400">REVELATIONS 2026</span>
			</p>
		</>
	);
}
// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 12,
		},
	},
};

const sectionVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
};

const headingVariants = {
	hidden: { opacity: 0, scale: 0.8, y: -20 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 120,
			damping: 10,
		},
	},
};

export default function AboutPage() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center py-6 px-4">
				<motion.section
					initial={{ opacity: 0, y: 40, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="max-w-5xl w-full mx-auto bg-[#0a0a0a]/90 rounded-lg shadow-2xl border border-red-900/40 p-4 md:p-10 mt-28 mb-6"
				>
					<OurTeamHeading />
				</motion.section>

				{/* Faculty Coordinators */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={sectionVariants}
					className="max-w-5xl w-full mx-auto mt-8 mb-10 px-6"
				>
					<motion.h2
						variants={headingVariants}
						className="font-stranger text-2xl md:text-3xl text-red-500 mb-4 text-center tracking-wider drop-shadow animate-pulse"
					>
						Faculty Coordinators
					</motion.h2>
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
					>
						{facultyCoordinators.map((f, index) => (
							<motion.div key={f.name} variants={itemVariants}>
								<ThemedCard image={f.image} name={f.name} designation={f.designation} phrase={f.phrase} />
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Core Committee */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={sectionVariants}
					className="max-w-5xl w-full mx-auto mb-10 px-6"
				>
					<motion.h2
						variants={headingVariants}
						className="font-stranger text-2xl md:text-3xl text-red-500 mb-4 text-center tracking-wider drop-shadow animate-pulse"
					>
						Core Committee
					</motion.h2>
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
					>
						{coreCommittee.map((c) => (
							<motion.div key={c.name} variants={itemVariants}>
								<ThemedCard image={c.image} name={c.name} className={c.class} phrase={c.phrase} />
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Website Developers */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={sectionVariants}
					className="max-w-5xl w-full mx-auto mb-10 px-6"
				>
					<motion.h2
						variants={headingVariants}
						className="font-stranger text-2xl md:text-3xl text-red-500 mb-4 text-center tracking-wider drop-shadow animate-pulse"
					>
						Website Developers
					</motion.h2>
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
					>
						{websiteDevelopers.map((d) => (
							<motion.div key={d.name} variants={itemVariants}>
								<ThemedCard image={d.image} name={d.name} className={d.class} phrase={d.phrase} />
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Committee Heads */}
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
					variants={sectionVariants}
					className="max-w-5xl w-full mx-auto mb-8 px-6"
				>
					<motion.h2
						variants={headingVariants}
						className="font-stranger text-2xl md:text-3xl text-red-500 mb-4 text-center tracking-wider drop-shadow animate-pulse"
					>
						Committee Heads
					</motion.h2>
					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
					>
						{committeeHeads.map((h) => (
							<motion.div key={h.name} variants={itemVariants}>
								<ThemedHeadCard name={h.name} role={h.role} phrase={h.phrase} />
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Tech Stack */}
				<section className="max-w-4xl w-full mx-auto mb-16 px-6">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="border-t border-red-900/30 pt-10"
					>
						<h2 className="font-stranger text-2xl md:text-3xl text-red-500 mb-4 text-center tracking-wider drop-shadow animate-pulse">Tech Stack</h2>
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
							{techStack.map((t) => (
								<ThemedTechCard key={t.name} name={t.name} icon={t.icon} description={t.description} />
							))}
						</div>
					</motion.div>
				</section>
			</main>
			<Footer />
		</>
	);
}
