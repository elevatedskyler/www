"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col p-1 sm:p-3 relative min-h-screen">
			{/* Logo fixed in viewport */}
			<div className="fixed flex pointer-events-none  sm:top-2 sm:left-2 justify-between w-full  h-full   z-50">
				<div>
					<Image
						src="/logo.svg"
						alt="Skyler Riley"
						width={500}
						height={500}
						className="invert brightness-0 filter"
					/>
					<div className="text-center font-bold text-white">
						<h2>Tech Artisian Consultant</h2>
					</div>
				</div>
				{/* <div className="px-10 py-5 gap-5 font-base flex flex-row text-2xl text-white">
					<Link href="/">Portfolio</Link>
					<Link href="/">Services</Link>
					<Link href="/">Contact</Link>
				</div> */}
			</div>

			{/* Main content */}
			<div className="h-screen w-full flex items-center justify-center gradient bg-gradient-to-t from-[#CBBD93] to-cyan-400 p-3 relative">
				{/* Grain overlay for this section only */}
				<div className="absolute inset-0 w-full h-full pointer-events-none z-20">
					<div
						className="w-full h-full opacity-80"
						style={{
							backgroundImage:
								"url('data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%224%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
							backgroundRepeat: "repeat",
							backgroundSize: "300px 300px",
						}}
					></div>
				</div>
				<div className="flex flex-col sm:flex-row justify-between items-stretch gap-8 w-full max-w-5xl z-30  ">
					<div className="flex flex-col justify-between self-stretch ">
						<span className="text-black uppercase text-3xl  sm:text-4xl font-bold">
							I craft
							<br />
							<span className="px-1 bg-white text-[#FF746C] text-shadow-lg">
								code
							</span>{" "}
							<span className="px-1 bg-white text-[#FF746C] text-shadow-lg">
								design
							</span>{" "}
							<span className="px-1 bg-white text-[#FF746C] text-shadow-lg">
								automations
							</span>
							<br />
							that bring ideas to life online and beyond.
						</span>

						<Link
							href="https://calendly.com/skyler-riley/30min"
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 border-[3px] border-[#8f403b] bg-[#FF746C] p-6 px-6 text-2xl text-white shadow-[4px_4px_0_0_#8f403b] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:transform w-auto"
						>
							Book Consultation
						</Link>
					</div>
					<div className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 overflow-hidden flex-shrink-0 relative z-30 border-white border-8">
						<Image
							alt="Skyler at El Yungue National Forest"
							src="/el-yunque.jpg"
							width={1200}
							height={800}
							className=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
