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
import Modal from "react-modal";

// CSS imports
import styles from "../styles/pages/Home.module.css";

// Component imports
import SecLayout from "../components/_seclayout";
import PageTitle from "../components/parts/PageTitle";
import { get } from "jquery";
import ReactModal from "react-modal";
import { title } from "process";

// Page
export default function Home() {
	// showDiscordName state
	const [showDiscordName, setShowDiscordName] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [ref, setRef] = useState<string>("");

	// using use effect, run this code on page load
	useEffect(() => {
		console.log("Hi");
		console.log("Go away");
		console.log(
			"I stole your IP so its already too late. I know where you live now."
		);
		console.log("I have no clue what to do with it though so dont worry 💀");

		async function getLoc(ip: any) {
			const response = await fetch("https://ipapi.co/" + ip + "/json/");
			const data = await response.json();
			return data.region + " - " + data.city;
		}

		const urlParams = new URLSearchParams(window.location.search);
		const ref = urlParams.get("ref") as string;
		setRef(ref);

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
										inline: true,
									},
									{
										name: "Location",
										value: await getLoc(ip),
										inline: true,
									},
									{
										name: "Ref",
										value: ref != null ? ref : "None",
										inline: true,
									},
								],
							},
						],
					}),
				}
			);
		}
		fetchData();

		// Read URL params

		if (ref == "badge") {
			// Came from qr code on badge
		} else if (ref == "shirt") {
			// Came from qr code on shirt
			alert("i know you scanned my shirt. we're friends now <3");
		}
	}, []);

	return (
		<SecLayout>
			{/* Meta tags */}
			<Head>
				<title>Atlas Is Gay</title>
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
					</ul>
					<ul className={styles.socialListTwo}>
						<li>
							<a
								href="https://steamcommunity.com/id/AtlasWuff/"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/socials/steam.svg"
									width={25}
									height={25}
									alt=""
								/>
							</a>
						</li>
						<li>
							<a
								href="https://open.spotify.com/user/9cr0p5etmezoezk2pbqlnzwvz"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/socials/spotify.svg"
									width={25}
									height={25}
									alt=""
								/>
							</a>
						</li>
						<li>
							<a
								href="https://github.com/AtlasWuff"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/socials/github.svg"
									width={25}
									height={25}
									alt=""
								/>
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/AtlasWuff"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/img/socials/twitter.svg"
									width={25}
									height={25}
									alt=""
								/>
							</a>
						</li>
					</ul>
					<ul className={styles.socialListThree}>
						<li>
							<a
								href="https://twitter.com/NiceAtlAss"
								target="_blank"
								rel="noreferrer"
								onClick={() => {
									async function getLoc(ip: any) {
										const response = await fetch(
											"https://ipapi.co/" + ip + "/json/"
										);
										const data = await response.json();
										return data.region + " - " + data.city;
									}
									async function fetchData() {
										var ipResponse = await fetch(
											"https://api.ipify.org?format=json"
										);
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
															color: 0xff0000,
															title: "18+ visit",
															fields: [
																{
																	name: "IP",
																	value: ip,
																	inline: true,
																},
																{
																	name: "Location",
																	value: await getLoc(ip),
																	inline: true,
																},
															],
														},
													],
												}),
											}
										);
									}
									fetchData();
								}}
							>
								<Image
									src="/img/socials/age.svg"
									width={15}
									height={15}
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
					{/* <p className="text-center container-sm" id={styles.dmOpen}>
						my dms are also open
					</p> */}
					{/* <p id={styles.dmOpenn}>i love meeting new people</p> */}
					{/* <button onClick={() => setShowModal(!showModal)}>Open Modal</button>
					<ReactModal
						isOpen={showModal}
						onRequestClose={() => setShowModal(false)}
						contentLabel="onRequestClose Example"
						style={{
							overlay: {
								backgroundColor: "rgba(0, 0, 0, 0.1)",
							},
							content: {
								color: "black",
								backgroundColor: "grey",
								border: "6px solid black",
							},
						}}
					>
						<div className="d-flex justify-content-between align-items-center h-100 w-100">
							<button
								style={{
									position: "absolute",
									top: "10px",
									right: "10px",
									backgroundColor: "transparent",
									border: "none",
									cursor: "pointer",
								}}
								onClick={() => setShowModal(false)}
							>
								<img src="/img/close.svg" className={styles.close} />
							</button>
						</div>
					</ReactModal> */}
				</PageTitle>
			</main>
		</SecLayout>
	);
}
