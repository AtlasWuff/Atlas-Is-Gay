// Imports
import Image from "next/image";
import * as React from "react";

// CSS imports
import styles from "../../styles/parts/PageTitle.module.css";

// Component imports
import ReactTypingEffect from "react-typing-effect";

// Interface to define props
interface Props {
	title?: string;
	height?: string;
	children?: React.ReactNode;
}

// Page
export default function ArtList({ title, children }: Props) {
	// Take all json objects from art.json and put in array state
	const [art, setArt] = React.useState([]);

	// Fetch the art.json file
	React.useEffect(() => {
		fetch("/art.json")
			.then((res) => res.json())
			.then((data) => {
				setArt(data);
			});
	}, []);

	return (
		<>
			<section id={`${styles.MainTitle}`}>
				<div id={`${styles.titleBg}`}>
					<Image src={"/img/bg.png"} fill alt="" draggable={false} />
				</div>
				<div id={`${styles.titleWrapper}`}>
					<h1 className="pb-3">{title}</h1>
					{children}
				</div>
			</section>
			<div className={`${styles.waveWrap}`}>
				<div className={`${styles.wave}`}>
					<Image
						src={`/img/wave.svg`}
						fill
						alt=""
						draggable={false}
						className=""
					/>
				</div>
			</div>
		</>
	);
}
