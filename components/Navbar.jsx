import Image from "next/image";
import Logo from "../public/images/adam.svg";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image src={Logo} alt="ADAM" />
                </div>
                <div className={styles.navItems}>
                    <NavLink href="/" label="HOME"/>
                    <NavLink href="/admin" label="ADMIN"/>
                </div>
            </nav>
        </header>
    );
};

const NavLink = ({href, label}) => {
    return (
        <Link href={href}>
            <a className="text-blue-500">{label}</a>
        </Link>
    );
};

export default Navbar;
