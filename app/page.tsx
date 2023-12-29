"use client"
import Image from 'next/image'
import classes from './page.module.css'
import { useState } from "react";
import { FetchLogin } from './api/fetch_login';

export default function Home() {
  const [ entryMail, setEntryMail ] = useState<string>("");
  const [ entryPassword, setEntryPassword ] = useState<string>("");


  const login = async () => {
    if (entryMail && entryPassword ) {
        const data = {
            collectionName: "test_izumi_data",
            mail: entryMail,
            password: entryPassword,
        };

        if (await FetchLogin(entryMail, entryPassword) == -1) {
          setEntryMail("error!");
        }
        

    }
  }
  const inputMail = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setEntryMail(event.target.value);
  }
  const inputPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setEntryPassword(event.target.value);
  }
  
  return (
    <main className={classes.main}>
      <div className={classes.description}>

        <h1>login</h1>
        <div className={classes.inputs}>
            <div className={classes.input}>
                <span className={classes.input_name} id="mail">mail</span><input type="email" value={entryMail} onChange={inputMail}></input>
            </div>
            <div className={classes.input}>
                <span className={classes.input_name} id="password">password</span><input type="password" onChange={inputPassword}></input>
            </div>
            <button className={classes.entry_button} onClick={login}>login</button>
        </div>
        <p>
          Get started by editing&nbsp;
          <code className={classes.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={classes.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={classes.center}>
        <Image
          className={classes.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={classes.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={classes.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={classes.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={classes.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={classes.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
