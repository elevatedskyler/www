"use client"; // Mark as Client Component

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
	const { scrollY } = useScroll();
	const [lastScrollY, setLastScrollY] = useState(0);
	const [shouldShowNav, setShouldShowNav] = useState(true);
	const [hideThreshold, setHideThreshold] = useState(0);

	// Control nav visibility based on scroll direction
	useEffect(() => {
		const updateScrollDirection = () => {
			const currentScrollY = window.scrollY;

			// If scrolling down
			if (currentScrollY > lastScrollY) {
				// When we start scrolling down, set a new threshold
				if (shouldShowNav && hideThreshold === 0) {
					setHideThreshold(currentScrollY + 300); // Hide after 100px more scroll
				}

				// If we've scrolled past the threshold, hide the nav
				if (currentScrollY > hideThreshold && hideThreshold > 0) {
					setShouldShowNav(false);
				}
			}
			// If scrolling up
			else if (currentScrollY < lastScrollY) {
				// Reset the threshold and show the nav
				setHideThreshold(0);
				setShouldShowNav(true);
			}

			setLastScrollY(currentScrollY);
		};

		// Add scroll event listener
		window.addEventListener("scroll", updateScrollDirection);

		return () => {
			window.removeEventListener("scroll", updateScrollDirection);
		};
	}, [lastScrollY, shouldShowNav, hideThreshold]);

	// Transform for nav visibility
	const navTransform = shouldShowNav ? "translateY(0)" : "translateY(-100%)";

	// Title opacity that increases on scroll
	const titleOpacity = useTransform(scrollY, [0, 300], [0, 1]);

	return (
		<div className="hidden fixed top-0 bg-transparent   w-full p-3 sm:p-5 z-50">
			{/* Navigation that slides up/down */}
			<motion.nav
				className="scale-150  text-xl bg-black/20 backdrop-blur-xl  w-full flex transition-transform duration-300 ease-in-out border-2 border-black rounded-lg "
				style={{ transform: navTransform }}
			>
				{/* Each button takes exactly 1/4 of the space */}

				<button className="text-left py-1  w-full font-bold">
					<Image
						src="/logo.svg"
						alt="Logo"
						width={170}
						height={170}
						className="inline-block mr-2"
						// style={{ objectFit: "contain" }}
					/>
				</button>
				<button className=" flex items-center justify-center pr-2 text-center text-3xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="inline-block w-[1em] h-[1em] mx-auto"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</motion.nav>
		</div>
	);
}
