// Imports
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import * as React from "react";

// Component imports
import Navbar from "./parts/Navbar";
import Footer from "./parts/Footer";

// Interface to define props
interface Props {
	children: React.ReactNode;
}

// Page
export default function Layout({ children }: Props) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta charSet="UTF-8" />
				<meta name="description" content="Atlas is probably gay" />
				<meta
					name="keywords"
					content="Atlas, Atlas Furry, Atlas Website, Atlas is gay, Atlas is"
				/>
				<meta name="theme-color" content="#345beb" data-reactroot="" />
				<meta property="og:title" content="Atlas is gay 🌈" />
				<meta property="og:description" content="Fruity ass website" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://atlasisgay.lol" />
				{/* <meta
					property="og:image"
					content="https://cdn.discordapp.com/attachments/894669724305215509/1060727100862119986/lymannhsborder.png"
				/> */}

				<meta name="author" content="Atlas" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			{/* Webpage global layout */}
			{/* <Navbar /> */}
			{children}
			{/* <Footer /> */}
		</>
	);
}
