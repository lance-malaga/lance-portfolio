import React from "react";
import Image from "next/image";
import styles from "./TextLayoutVertical.module.scss";

export default function TextLayoutVertical({
	title1,
	parag1,
	parag1_extra,
	image,
	title2,
	parag2,
	sectionWidth = false
}) {
	const renderParagraph = (content) => {
		if (Array.isArray(content)) {
			return content.map((part, index) => {
				if (typeof part === "string") return part;
				if (React.isValidElement(part)) return <React.Fragment key={index}>{part}</React.Fragment>;
				if (part.highlight) {
					return (
						<span className={styles.highlight} key={index}>
							{part.text}
						</span>
					);
				}
				return <span key={index}>{part.text}</span>;
			});
		}
		return content;
	};


	return (
		<div className={styles.text_layout}>
            {parag1 && (
                <div className={styles.section1}>
                    {title1 && <h4>{title1}</h4>}
                    <p>{renderParagraph(parag1)}</p>
                    {parag1_extra && <p className={styles.extra_paragraph}>{renderParagraph(parag1_extra)}</p>}
                </div>
            )}
			{image && (
				<Image src={image} alt={title1 + " image"} />
			)}

			{parag2 && (
				<div className={styles.section2} style={{maxWidth: sectionWidth && '450px'}}>
					{title2 && <h4>{title2}</h4>}
					<p>{renderParagraph(parag2)}</p>
				</div>
			)}
		</div>
	);
}
