import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import Header from "./Header";
import { motion } from "framer-motion";

export const metadata: Metadata = {
	title: "Skyler Riley",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={GeistSans.variable}>
			<body className={`antialiased font-sans`}>
				<Header />
				<main className="flex flex-row relative">
					<div className="w-64 fixed h-full">
						{" "}
						<div className="p-3">
							<h1 className="text-black text-4xl font-bold ">
								Skyler Riley
							</h1>
							<h2 className="text-gray-500 text-xl font-regular">
								Software + Design
							</h2>
						</div>
					</div>
					<div className=" w-full">{children}</div>
				</main>
			</body>
		</html>
	);
}
