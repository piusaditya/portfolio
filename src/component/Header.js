import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link as ScrollLink } from "react-scroll";
import Typical from "react-typical";

import content from "../content";

export default function Header() {
	const [animated, setAnimated] = useState(false);
	useEffect(() => {
		setAnimated(true);
	}, []);

	return (
		<div className="bg-green-700 min-h-screen flex items-center justify-center">
			<div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
				<div className="w-8/12 md:w-2/5">
					<LazyLoadImage
						src={content.header.img}
						effect="blur"
						alt="foto"
						placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
					/>
				</div>
				<div className="text-white font-dosis text-center md:text-left">
					<h2
						className={`${
							animated ? "" : "translate-y-10 opacity-0"
						} transfrom transition duration-1000 ease-in-out text-4xl md:text-7xl mt-8 font-bold`}
					>
						{content.header.text[0]}
						<br />
						{content.header.text[1]}
					</h2>
					<h1
						className={`${
							animated ? "" : "translate-y-10 opacity-0"
						} transfrom transition duration-1000 ease-in-out font-bold text-xl md:text-4xl mt-5 text-gray-300`}
					>
						{content.header.text[2]}
						<Typical
							steps={content.header.typical}
							loop={Infinity}
							className="inline-block"
						/>
					</h1>
					<ScrollLink to="stack" smooth="true">
						<button className="animate-float bg-green-900 px-10 py-3 text-xl uppercase mt-10 rounded-lg font-mono">
							v
						</button>
					</ScrollLink>
				</div>
			</div>
		</div>
	);
}
