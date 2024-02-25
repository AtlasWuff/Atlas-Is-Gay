// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { use, useEffect, useRef, useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import { useAnimation, motion } from "framer-motion";

// CSS imports
import styles from "../styles/pages/Home.module.css";

// Component imports
import SecLayout from "../components/_seclayout";
import PageTitle from "../components/parts/PageTitle";

// Page
export default function Home() {
	return (
		<SecLayout>
			{/* Meta tags */}
			<Head>
				<title>Atlas Is Gay 🌈</title>
				<link rel="canonical" href="https://atlasisgay.lol/" />
			</Head>

			{/* ! Main homepage content */}
			<main className={styles.main}>
				{/* 64px div spacer */}
				<div className=""></div>

				<PageTitle>
					<h1 className="text-center container-sm">Atlas</h1>
					<p className="text-center container-sm">
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						Now that you're here, follow me on{" "}
						<a
							href="https://twitter.com/_ItsAtlas"
							target="_blank"
							rel="noreferrer"
						>
							twitter
						</a>
					</p>
					<p>(and everywhere else :3)</p>
					<ul className={styles.socialList}>
						<li>
							<a
								href="https://instagram.com/itsatlas___"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/socials/instagram.svg"
									width={40}
									height={40}
									alt=""
								/>
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/_ItsAtlas"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/socials/twitter.svg"
									width={40}
									height={40}
									alt=""
								/>
							</a>
						</li>
						<li>
							<a href="https://t.me/ItssAtlas" target="_blank" rel="noreferrer">
								<Image
									src="/img/socials/telegram.svg"
									width={40}
									height={40}
									alt=""
								/>
							</a>
						</li>
						<li>
							<a
								href="https://discord.com/users/484343723426054150"
								target="_blank"
								rel="noreferrer"
								onClick={() => alert("ItsAtlas__")}
							>
								<Image
									src="/img/socials/discord.svg"
									width={40}
									height={40}
									alt=""
								/>
							</a>
						</li>
						<li>
							<a
								href="https://steamcommunity.com/id/ItsAtlas___/"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/socials/steam.svg"
									width={40}
									height={40}
									alt=""
								/>
							</a>
						</li>
					</ul>
				</PageTitle>
			</main>
		</SecLayout>
	);
}
