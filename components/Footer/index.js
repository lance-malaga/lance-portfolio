import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss"
import footerLogo from "@/public/images/footer-logo.svg"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Image
				src={footerLogo}
				alt="footer-log"
			/>
			<ul>
				<li>
					<Link href={'/work/graphic-design'}>02 <span>Work</span></Link>
				</li>
				<li>
					<Link href={'/about'}>03 <span>About</span></Link>
				</li>
				<li>
					<Link href={'/contact'}>04 <span>Contact</span></Link>
				</li>
			</ul>
		</footer>
	)
}