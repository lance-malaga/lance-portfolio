import Image from "next/image";
import styles from "./TextLayoutHorizontal.module.scss";

export default function TextLayoutHorizontal({
	title1,
	parag1,
	image,
	title2,
	parag2,
	backgroundColor,
	imageWidth,
}) {
	const renderParagraph = (content) => {
		if (Array.isArray(content)) {
			return content.map((part, index) => {
				if (typeof part === "string") return part;
				if (part.highlight) {
					return (
						<span className={styles.highlight} key={index}>
							{part.text}
						</span>
					);
				}
				return part.text;
			});
		}
		return content;
	}

	return (
		<div className={styles.text_layout}>
			{image && (
				<Image src={image} alt={title1 + " image"} style={{backgroundColor: backgroundColor, width: imageWidth}} />
			)}
			<div className={styles.text_section}>
				{parag1 && (
					<div className={styles.section1}>
						{title1 && <h4>{title1}</h4>}
						<p>{renderParagraph(parag1)}</p>
					</div>
				)}

				{parag2 && (
					<div className={styles.section2}>
						{title2 && <h4>{title2}</h4>}
						<p>{renderParagraph(parag2)}</p>
					</div>
				)}
			</div>
		</div>
	);
}
