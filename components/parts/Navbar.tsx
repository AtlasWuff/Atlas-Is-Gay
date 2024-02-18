// Imports
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

// CSS imports
import styles from "../../styles/parts/Navbar.module.css";

// Interface to define props
interface Props {}

// Page
export default function Navbar({}: Props) {
	const logoRef = useRef<HTMLImageElement>(null);
	const navbarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (navbarRef.current !== null) {
				document.body.getBoundingClientRect().top <= -34
					? navbarRef.current.classList.add(`${styles.scrolledNav}`)
					: navbarRef.current.classList.remove(`${styles.scrolledNav}`);
			}
		});
	}, []);

	return (
		<nav className="h-100 w-100">
			<div className={`${styles.NavWrapper}`} ref={navbarRef}>
				<ul className="d-flex flex-row justify-content-around align-items-center">
					<li className="col-lg-5 col-sm-6" id={`${styles.NavTitle}`}>
						<div className="d-flex flex-row justify-content-lg-center p-lg-0 p-3 align-items-center">
							<div className="d-flex flex-row align-items-center justify-content-center">
								<Link href="/" className="mx-2">
									{"> ATLASISGAY.LOL"}
								</Link>
								<div id={styles.terminalitem}></div>
							</div>
						</div>
					</li>
					<li className="col-lg-2 d-flex align-items-center justify-content-evenly"></li>
					<li className="col-lg-5 col-xs-6 d-flex align-items-center justify-content-center">
						<Link href="/about" className="mx-lg-5 mx-3">
							ABOUT
						</Link>
						<Link href="/art">ART</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
