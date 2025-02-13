/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// Adicione as cores dentro de extend para que elas sejam adicionadas às cores padrão do Tailwind
			colors: {
				"orange-base": "#F24D0D",
				"orange-dark": "#C43C08",
				"blue-light": "#D7EFF9",
				"blue-base": "#5EC5FD",
				"blue-dark": "#009CF0",
				white: "#FFFFFF", // Já é uma cor padrão, mas você pode sobrescrever
				background: "#FBF4F4",
				shape: "#F5EAEA",
				"gray-100": "#ADADAD",
				"gray-200": "#949494",
				"gray-300": "#666666",
				"gray-400": "#3D3D3D",
				"gray-500": "#1D1D1D",
				danger: "#DC3545",
				success: "#28A745",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
				"dm-sans": ["DM Sans", "sans-serif"],
			},
			lineHeight: {
				DEFAULT: "1.2",
				none: "1",
				tight: "1.25",
				snug: "1.375",
				normal: "1.5",
				relaxed: "1.625",
				loose: "2",
			},
		},
	},
	plugins: [],
};
