import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

import Header from "./Header";

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
				<main className="w-full">{children}</main>
			</body>
		</html>
	);
}
