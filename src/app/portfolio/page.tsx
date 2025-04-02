// src/app/portfolio/index.ts

import Link from "next/link";

export default function Portfolio() {
	return (
		<div className=" min-h-screen pt-36">
			<div className="flex flex-col items-center justify-center h-full">
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
								<Link
									href="#"
									className="text-sm/6 font-semibold text-gray-700"
								>
									Learn more <span aria-hidden="true">→</span>
								</Link>
							</div>
						</div>
						<div className="relative mt-16 h-80 lg:mt-8">
							<img
								alt="App screenshot"
								src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
								width={1824}
								height={1080}
								className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
