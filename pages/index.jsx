import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "../layouts/default";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ADAM</title>
                <meta
                    name="description"
                    content="Automated Digital Assistant in Marketing"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <main className="min-h-screen flex flex-col justify-center items-center">
                  <h1 className="text-purple-700">
                    ADAM HOME PAGE

                  </h1>
                </main>
            </Layout>
        </div>
    );
}
