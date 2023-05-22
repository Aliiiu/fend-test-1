/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#545F7D',
				blue01: '#213F7D',
				yellow01: '#E9B200',
				green01: '#39CD62',
				red01: '#E4033B',
				cyan01: '#39CDCC',
				grey01: '#545f7d26',
				grey02: '#213f7d1a',
				grey03: '#213f7d0f',
				inactive: '#545f7d0f',
				pending: '#e9b2001a',
				blacklisted: '#E4033B1A',
				active: '#39CD620F',
			},
		},
	},
	plugins: [],
};
