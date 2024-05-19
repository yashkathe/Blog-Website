import React from "react";
import { Tilt } from "react-tilt";

import Tag from "./Tags/Tag";

import styles from "./BlogPreview.module.css";

const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 25, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1, // 2 = 200%, 1.5 = 150%, etc..
	speed: 5000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const BlogPreview = ({ title, description, tags }) => {
	return (
		<Tilt options={defaultOptions}>
			<div className={styles.parent}>
				<h2>{title}</h2>
				<p>{description}</p>
				<ul>
					{tags.map((tag) => (
						<Tag key={tag} tagname={tag} />
					))}
				</ul>
			</div>
		</Tilt>
	);
};

export default BlogPreview;
