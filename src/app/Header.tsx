"use client"; // Mark as Client Component

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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
		<div className="fixed top-0 w-full flex flex-col bg-transparent  z-10">
			{/* Navigation that slides up/down */}
			<motion.nav
				className="flex max-w-md w-full text-xl p-3 transition-transform duration-300 ease-in-out"
				style={{ transform: navTransform }}
			>
				{/* Each link takes exactly 1/4 of the space */}
				<Link
					href="/about"
					className="flex-1 text-center py-2 border-l-2 border-black  border-y-2 rounded-l-lg hover:font-semibold hover:bg-white transition-colors bg-white/50"
				>
					About
				</Link>
				<Link
					href="/portfolio"
					className="flex-1 text-center py-2 border-black  border-y-2 hover:font-semibold hover:bg-white transition-colors bg-white/50"
				>
					Portfolio
				</Link>
				<Link
					href="/socials"
					className="flex-1 text-center py-2 border-black border-y-2 hover:font-semibold hover:bg-white transition-colors bg-white/50"
				>
					Socials
				</Link>
				<Link
					href="/contact"
					className="flex-1 text-center border-r-2 border-y-2 border-black rounded-r-lg py-2  hover:font-semibold hover:bg-white transition-colors bg-white/50"
				>
					Contact
				</Link>
			</motion.nav>

			{/* Title that stays below nav and fades in on scroll */}
			<motion.div
				className="text-4xl font-bold p-3 mt-2"
				style={{ opacity: titleOpacity }}
			>
				<h1>Skyler Riley</h1>
			</motion.div>
		</div>
	);
}
