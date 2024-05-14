import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<Link href="/">Home</Link>
			<Link href="/contact">Contact</Link>
			<Link href="/cv">CV</Link>
			<Link href="/jeu">Jeu</Link>
		</main>
	);
}
