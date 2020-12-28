module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				dosis: ["Dosis"],
			},
			animation: {
				float: "float 3s infinite",
				refloat: "refloat 3s infinite",
			},
			keyframes: {
				float: {
					"0%": {
						transform: "translateY(0px)",
						animationTimingFunction: "ease-in-out",
					},
					"50%": {
						transform: "translateY(-20px)",
						animationTimingFunction: "ease-in-out",
					},
					"100%": {
						transform: "translateY(0px)",
						animationTimingFunction: "ease-in-out",
					},
				},
				float: {
					"0%": {
						transform: "translateY(-20px)",
						animationTimingFunction: "ease-in-out",
					},
					"50%": {
						transform: "translateY(0px)",
						animationTimingFunction: "ease-in-out",
					},
					"100%": {
						transform: "translateY(-20px)",
						animationTimingFunction: "ease-in-out",
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
