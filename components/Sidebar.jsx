
import Link from "next/link"

const Sidebar = () => {
    return(
        <header className={styles.sidebar}>
            <nav className={styles.nav}>
                <div className={styles.navItems}>
                    <Link href="/admin/users">
                        <a>Manage Users</a>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Sidebar;