import styles from "../../../styles/Admin/Login.module.scss";
import Logo from "../../../public/images/adam.svg";
import Image from "next/image";
import { useState } from "react";
import { Formik } from "formik";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {};

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <main className={styles.main}>
            <div className={styles.loginSection}>
                <div className={styles.leftContainer}>
                    <Image src={Logo} alt="ADAM" />
                    <h1>Automated Digital Assistant for Marketing</h1>
                    <div className={styles.businessText}>
                        <h2>Grow your</h2>
                        <h3>Business</h3>
                        <h4>Like Never Before!</h4>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.formContainer}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="email"
                                name="email"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                    console.log(email);
                                }}
                                placeholder="Enter email"
                            />
                            <input
                                type="password"
                                name="password"
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                    console.log(password);
                                }}
                                placeholder="Enter password"
                            />
                            <button type="submit">Log In</button>
                        </form>
                        <div className={styles.forgotPassword}>
                            <a href="/">
                                Forgot Password?
                            </a>
                        </div>
                        <hr />
                        <div className={styles.signUpButton}>
                            <button type="submit">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminLogin;
