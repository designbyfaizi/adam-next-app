import styles from "../../../styles/Admin/Login.module.scss";
import Logo from "../../../public/images/adam.svg";
import Image from "next/image";
import { useState } from "react";
import { Formik } from "formik";
import router from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState("none");

    useEffect(() => {
        if(isValid==="false"){
            alert("Invalid Credentails");
        }
        if(isValid==="true"){
            router.push("/admin/users");
        }
    }, [isValid]);


    const validateForm = () => {};

    const handleSubmit = (event) => {
        event.preventDefault();
            if(email != "faizanullah1999@gmail.com" && password != "Test@123"){
                setTimeout(() => {
                    setIsValid("false");

                }, 1000)
            }
            else if(email === "faizanullah1999@gmail.com" || password === "Test@123"){
                setTimeout(() => {
                    setIsValid("true");
                    
                }, 1000)
            }
            else if(email === "" && password === ""){
                setIsValid("none");
            }

        
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
                            <Link href="/">
                                <a>Forgot Password?</a>
                            </Link>
                        </div>
                        <hr />
                        <div className={styles.signUpButton}>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminLogin;
