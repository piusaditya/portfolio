import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";

import content from "../content";

export default function header() {
	return (
		<div className="bg-green-700 min-h-screen flex items-center justify-center">
			<div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
				<div className="w-full md:w-2/5">
					<LazyLoadImage
						src={content.header.img}
						effect="blur"
						placeholderSrc={process.env.PUBLIC_URL + "/logo512.png"}
					/>
				</div>
				<div className="text-white font-dosis text-center md:text-left">
					<h2 className="text-3xl md:text-7xl font-bold">
						{content.header.text[0]}
						<br />
						{content.header.text[1]}
					</h2>
					<h1 className="font-bold text-2xl md:text-4xl mt-5 text-gray-300">
						{content.header.text[2]}
						<Typical
							steps={content.header.typical}
							loop={Infinity}
							className="inline-block"
						/>
					</h1>
					<button className="animate-float bg-green-900 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
						{content.header.btnText}
					</button>
				</div>
			</div>
		</div>
	);
}
