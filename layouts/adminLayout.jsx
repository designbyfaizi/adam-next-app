
import Footer from "../components/Footer";
import styles from "../styles/layouts/adminLayout.module.scss";
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/images/adam_white.svg";

const Layout = ({ children }) => {
    return (
        <div className={`${styles.adminLayouts}`}>
            <header className={styles.sidebar}>
                <nav className={styles.nav}>
                    <div className={styles.navImage}>
                        <Image src={Logo} alt="ADAM" />
                    </div>
                    <div className={styles.navItems}>
                        <Link href="/admin/users">
                            <a>Manage Users</a>
                        </Link>
                        <Link href="/admin/admins">
                            <a>Manage Admins</a>
                        </Link>
                        <Link href="/admin/services">
                            <a>Manage Services</a>
                        </Link>
                        {/* <Link href="/">
                            <a className={styles.logOut}>Log Out</a>
                        </Link> */}
                    </div>
                    <div className={styles.logOut}>
                        <Link href="/">
                            <a>Log Out</a>
                        </Link>

                    </div>

                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
