"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col   relative min-h-screen">
			{/* Logo fixed in viewport */}

			{/* Main content */}
			<div className="h-screen w-full flex flex-col justify-start gradient bg-gradient-to-t from-[#CBBD93] to-cyan-400 relative">
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

				{/* Logo section - now relative instead of absolute */}
				<div className="flex relative z-30 ">
					<div className="flex flex-col items-center">
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
				</div>

				{/* Main content section */}
				<div className="flex-1 flex items-center justify-center px-3">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-8 w-full max-w-5xl z-30">
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
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-10 items-center justify-between">
								<Link
									href="https://calendly.com/skyler-riley/30min"
									className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 border-[3px] border-[#8f403b] bg-[#FF746C] p-6 px-6 text-2xl text-white shadow-[4px_4px_0_0_#8f403b] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:transform w-full sm:flex-1"
								>
									Book Consultation
								</Link>
								<Link
									href="/portfolio"
									className="text-white text-2xl text-shadow-lg flex items-center gap-2"
								>
									Explore Portfolio
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="inline-block ml-1"
									>
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								</Link>
							</div>
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
		</div>
	);
}
