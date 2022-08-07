module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				"montserrat": ["Montserrat", "sans-serif"],
				"kaushan-script": ['"Kaushan Script"', "cursive"],
			},
			colors: {
				"soft-black": "hsl(0 0% 20%)",
				"soft-gold": "hsl(47, 95%, 76%);",
				"gentle-red": "hsl(0, 83%, 73%);",
			},
		},
	},
}
