import Head from "next/head";
import Image from "next/image";
import Header from "../components/organisms/header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Takeda Oncology</title>
        <meta name="description" content="Takeda Oncology Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <p>Test!!</p>
      </main>
    </div>
  );
}
