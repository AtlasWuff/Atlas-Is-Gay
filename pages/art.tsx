// Imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { use, useEffect, useRef, useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import { useAnimation, motion } from "framer-motion";

// CSS imports
import styles from "../styles/pages/Art.module.css";

// Component imports
import SecLayout from "../components/_seclayout";
import PageTitle from "../components/parts/PageTitle";

// Page
export default function Art() {
	return (
		<SecLayout>
			{/* Meta tags */}
			<Head>
				<title>Atlas Is Gay 🌈</title>
				<link rel="canonical" href="https://atlasisgay.lol/" />
			</Head>

			{/* ! Main homepage content */}
			<main className={styles.main}>
				<div />
				<h1 className="w-100 d-flex justify-content-center align-items-center">Coming soon</h1>>
			</main>
		</SecLayout>
	);
}
