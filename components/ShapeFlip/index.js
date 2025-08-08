import Image from "next/image";
import Link from "next/link";
import styles from "./ShapeFlip.module.scss"

export default function ShapeFlip({data}) {
	return (
		<div className={styles.shape}>
			<div className={ data.sample ? styles.frontFace : ''}>
				<Image
					src={data.shape}
					alt={"shape" + data.id}
					width={"auto"}
					height={"auto"}
				/>
			</div>
			{ data.sample && (
				<div className={styles.backFace}>
					<Link href={data.link} target='_blank'>
						<Image
							src={data.sample}
							alt={"sample" + data.id}
							width={"auto"}
							height={"auto"}
						/>
					</Link>
				</div>
			)}
		</div>
	)
}