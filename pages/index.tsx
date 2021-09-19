import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevLogo from "../public/icons/Dev.png";
import GitHubLogo from "../public/icons/GitHub.png";
import LinkedInLogo from "../public/icons/LinkedIn.png";
import StackOverflowLogo from "../public/icons/StackOverflow.png";
import TwitterLogo from "../public/icons/Twitter.png";
import ProfilePic from "../public/profile-pic.png";
import styles from "../styles/Home.module.scss";

// TODO: Add dark theme toggling
// TODO: Add attribution: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bhushan&apos;s personal website</title>
        <meta name="description" content="Bhushan's personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <base target="_blank" />
      </Head>
      {/* <Nav className={styles.nav} /> */}
      <main className={styles.main}>
        <div className={styles.profile}>
          <h1>Bhushan Shah</h1>
          <div className={styles["profile-pic"]}>
            <Image
              src={ProfilePic}
              alt="Picture of the author"
              width={200}
              height={191}
              priority={true}
            />
          </div>
          <p>Hello, visitor!</p>
          <p>
            I&apos;m Bhushan, a software engineer based in Seattle, Washington.
          </p>
          <p>
            I have multiple years of software engineering experience, most of it
            doing full-stack web development. I like making accessible, fast,
            and user-friendly web applications.
          </p>
          <p>
            Outside of work I spend my time playing board games and video games,
            cooking, and watching sports.
          </p>
          <p>
            Reach me on my{" "}
            <a
              href="mailto:bhushan.shah.dev@gmail.com"
              style={{ textDecoration: "underline" }}
            >
              email
            </a>
            , or come say hi on Twitter!
          </p>
        </div>
        <div className={styles["icon-links"]}>
          <Link href="https://www.linkedin.com/in/bhushanshah111/">
            <a>
              <Image
                src={LinkedInLogo}
                alt="Bhushan's LinkedIn profile"
                height={60}
                width={60}
                objectFit="contain"
                priority={true}
              />
            </a>
          </Link>
          <Link href="https://github.com/bhushan-shah-dev">
            <a>
              <Image
                src={GitHubLogo}
                alt="Bhushan's GitHub profile"
                height={60}
                width={60}
                objectFit="contain"
                priority={true}
              />
            </a>
          </Link>
          <Link href="https://dev.to/bhushanshahdev">
            <a>
              <Image
                src={DevLogo}
                alt="Bhushan's dev.to profile"
                height={60}
                width={60}
                objectFit="contain"
                priority={true}
              />
            </a>
          </Link>
          <Link href="https://stackoverflow.com/users/2918683/bhushan-shah">
            <a>
              <Image
                src={StackOverflowLogo}
                alt="Bhushan's StackOverflow profile"
                height={60}
                width={60}
                objectFit="contain"
                priority={true}
              />
            </a>
          </Link>
          <Link href="https://twitter.com/BhushanShah_">
            <a>
              <Image
                src={TwitterLogo}
                alt="Bhushan's Twitter profile"
                height={60}
                width={60}
                objectFit="contain"
                priority={true}
              />
            </a>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <small>
          {"Website source code "}
          <a href="https://github.com/bhushan-shah-dev/personal-site">here</a>
        </small>
        <small>
          {"Favicon made by "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>
          {" from "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </small>
      </footer>
    </div>
  );
};

export default Home;
