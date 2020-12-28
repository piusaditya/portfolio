import React from "react";
import content from "../content";

export default function Navigation() {
	return (
		<div className="bg-green-800">
			<div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
				<h1 className="uppercase text-3xl font-bold">
					{content.nav.logo}{" "}
					<span className="w-3 h-3 bg-white inline-block rounded-full"></span>
				</h1>
				<div>
					{content.nav.links.map((link, index) => {
						return (
							<span key={index} className="text-xl md:text-2xl mr-4">
								{link.text}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
}
