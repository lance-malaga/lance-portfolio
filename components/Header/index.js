import Image from "next/image";
import styles from "./Header.module.scss"

import logo from "@/public/logo.svg"
import menuIcon from "@/public/icons/menu-icon.svg"

export default function Header() {
    return (
        <header className={styles.header}>
            <Image
                src={logo}
                alt="logo"
                width={84}
                height={32}
            />
            <Image
                src={menuIcon}
                alt="menu-icon"
                width={30}
                height={20}
            />
        </header>
    )
}
