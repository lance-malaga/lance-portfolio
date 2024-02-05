import Image from "next/image";
import styles from "./Header.module.scss"

import logo from "@/public/logo.svg"
import menuIcon from "@/public/icons/menu-icon.svg"
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Image
                    src={logo}
                    alt="logo"
                    width={84}
                    height={32}
                />
            </Link>
            <Link href={'/navigation'}>
                <Image
                    src={menuIcon}
                    alt="menu-icon"
                    width={30}
                    height={20}
                />
            </Link>
        </header>
    )
}
