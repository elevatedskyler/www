import type { Metadata } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";

import Header from "./Header";

const playfair = Playfair({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

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
		<html lang="en">
			<body
				className={`${playfair.variable} ${playfair.variable} antialiased`}
			>
				<Header />
				<main className=" ">{children}</main>
			</body>
		</html>
	);
}
