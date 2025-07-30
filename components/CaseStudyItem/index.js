import { useState } from "react"
import Image from "next/image"
import styles from "./CaseStudyItem.module.scss"
import imagesample from "@/public/images/home/project-banners/spurt-banner.jpg"

export default function CaseStudyItem({
	image = imagesample,
	number = "00", 
	title = "Project Title", 
	tags = ["ux/ui", "web design", "branding"]
}) {

	const [isHover, setIsHover] = useState(false);
	
	return (
		<div className={styles.project}>
			{isHover &&
				<Image
					src={image}
					alt={title + " image banner"}
					className={styles.project__banner}
				/>
			}
			<div 
				className={styles.project__container} 
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<div className={styles.project__title}>
					<p>{number}</p>
					<h1>{title}</h1>
				</div>
				<div className={styles.tag__container}>
					{tags.map((tag, index) => {
						return (
							<div className={styles.tag__item} key={index}>{tag}</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}