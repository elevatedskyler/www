"use client";

import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col p-3 ">
			<div className="h-screen w-full flex items-center gradient bg-gradient-to-t from-white to-cyan-300  p-3 ">
				<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
					<div className="flex flex-col space-y-6 md:w-2/3">
						<h1 className="text-gray-800 text-5xl  font-bold">
							Crafting Cutting-Edge Solutions for a Smarter Future
						</h1>
						<p className="text-gray-500">
							I&apos;m a Charleston-based lead software engineer
							with a passion for building innovative, high-impact
							web and blockchain solutions. From B2B SaaS
							applications to IoT-driven automation, I specialize
							in creating tools that streamline operations and
							solve real-world challenges. Whether it&apos;s a
							mobile-friendly POS system, a geo-fenced time
							tracker, or Ethereum smart contracts, I leverage
							technologies like Next.js, React, TypeScript, and
							Solidity to deliver seamless, scalable results.
							Ready to elevate your business with tailored tech?
							Let&apos;s make it happen.
						</p>
						<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 border-[3px] border-[#8f403b] bg-[#FF746C] p-6 px-6 text-2xl  text-white shadow-[4px_4px_0_0_#8f403b] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:transform  w-auto">
							Book a Call with Me
						</button>
					</div>
					<div className="rounded-full h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 overflow-hidden flex-shrink-0">
						<Image
							alt="Skyler at El Yungue National Forest"
							src="/el-yunque.jpg"
							width={1200}
							height={800}
							className="rounded-full"
						/>
					</div>
				</div>
			</div>
			<div className=" min-h-screen from-white to-lime-300 bg-gradient-to-b">
				content 2
			</div>
		</div>
	);
}
