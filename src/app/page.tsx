"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
	const logoContainerRef = useRef(null);
	const [isFixed, setIsFixed] = useState(false);

	// Function to handle scroll and determine if logo should be fixed
	useEffect(() => {
		const handleScroll = () => {
			if (logoContainerRef.current) {
				const rect = logoContainerRef.current.getBoundingClientRect();
				// When the top of the container reaches the top of the viewport, make it fixed
				if (rect.top <= 0 && !isFixed) {
					setIsFixed(true);
				} else if (rect.top > 0 && isFixed) {
					setIsFixed(false);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isFixed]);

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
					/>
				</div>

				{/* Logo section that will become fixed */}
				<div ref={logoContainerRef} className="flex z-30">
					{/* The original logo in its normal position */}
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

			<div className="h-screen  pl-24 p-3 flex flex-col items-center justify-center bg-gradient-to-b from-[#CBBD93] to-cyan-400">
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
					/>
				</div>
				<div className="flex flex-col items-center justify-center h-full z-30">
					<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
						<div className="relative isolate overflow-hidden border-2 border-black bg-white px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
							<div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
								<h2 className="text-balance text-3xl font-semibold tracking-tight text-black sm:text-4xl">
									Finvelope
								</h2>
								<p className="mt-6 text-pretty text-lg/8 text-gray-700">
									Invoice and estimate builder with a focus on
									simplicity and ease of use.
								</p>
								<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
									<Link
										href="https://finvelope.skylerriley.com/"
										className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 border-[3px] border-[#8f403b] bg-[#FF746C] p-6 px-6 text-2xl text-white shadow-[4px_4px_0_0_#8f403b] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:transform w-auto"
									>
										Live Demo
									</Link>
									{/* <Link
										href="#"
										className="text-sm/6 font-semibold text-gray-700"
									>
										Learn more{" "}
										<span aria-hidden="true">→</span>
									</Link> */}
								</div>
							</div>
							<div className="relative mt-16 h-80 lg:mt-8">
								{/* <img
									alt="App screenshot"
									src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
									width={1824}
									height={1080}
									className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
								/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen pl-24 p-3 flex flex-col items-center justify-center bg-gradient-to-t from-[#CBBD93] to-cyan-400">
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
					/>
				</div>
				<form
					className="flex z-30 flex-col items-start justify-center w-full max-w-xl p-2  rounded-md bg-stone-50 shadow-[4px_4px_0_0_black] h-full max-h-[80vh]"
					action="https://formspree.io/f/xjkyaqqb"
					method="POST"
				>
					<div className="flex flex-col items-start justify-center w-full h-full gap-y-2">
						<h2 className="text-2xl sm:text-4xl font-bold text-left w-full px-3 pt-3 ">
							Contact Me
						</h2>
						<div className="rounded-t-md  px-3 pb-1.5 pt-2.5     w-full">
							<label
								htmlFor="name"
								className="block text-xs font-medium text-gray-900"
							>
								Email
							</label>
							<input
								id="email"
								name="name"
								type="email"
								placeholder="email@example.com"
								className="block w-full border-b bg-transparent py-1 text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-xl font-semibold "
							/>
						</div>
						<div className=" px-3 pb-1.5 pt-2.5 w-full flex-1 flex flex-col">
							<label
								htmlFor="message"
								className="block text-xs font-medium text-gray-900"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								className="block w-full pt-1 h-40 min-h-[200px] flex-1 text-gray-900 placeholder:text-gray-400 focus:outline bg-transparent focus:outline-0 sm:text-xl font-semibold resize-none"
							/>
						</div>
					</div>
					<button
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 border-[3px] border-[#8f403b] bg-[#FF746C] p-6 px-6 text-2xl text-white  transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:transform w-full shadow-[4px_4px_0_0_#8f403b]"
						type="submit"
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}
