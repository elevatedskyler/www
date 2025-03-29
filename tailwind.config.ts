import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			backgroundImage: {
				"dots-pattern": "radial-gradient(transparent 1px, white 1px)",
				"dots-pattern-dark":
					"radial-gradient(transparent 1px, rgb(0 0 0) 1px)",
			},
		},
	},
	//   plugins: [require("tailwindcss-animate")],
} satisfies Config;
