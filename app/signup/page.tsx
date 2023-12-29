"use client"
import classes from "@/app/signup/page.module.css";
import { useState } from "react";

export default function Signup() {
    const [ entryName, setEntryName ] = useState<string>("");
    const [ entryMail, setEntryMail ] = useState<string>("");
    const [ entryPassword, setEntryPassword ] = useState<string>("");
    const [ entryConfirmPassword, setEntryConfirmPassword ] = useState<string>("");

    const entry = async () => {
        console.log(entryName);
        if (entryName && entryMail && entryPassword && entryConfirmPassword &&
            entryPassword == entryConfirmPassword) {
                console.log(entryMail);
            const data = {
                collectionName: "test_izumi_data",
                name: entryName,
                mail: entryMail,
                password: entryPassword,
            };
            const params = {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            };
            await fetch("http://os3-282-30802.vs.sakura.ne.jp/insert", params).then(req => req.json() ).then( data2 => {
                console.log(data2.result);
                location.href = "http://localhost:3000";
            });
        }
    }
    const inputName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEntryName(event.target.value);
    }
    const inputMail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEntryMail(event.target.value);
    }
    const inputPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEntryPassword(event.target.value);
    }
    const inputConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEntryConfirmPassword(event.target.value);
    }

    return (
        <>
          <main className={classes.main}>
              <div className={classes.description}>
                  <h1>signup</h1>
                  <div className={classes.inputs}>
                      <div className={classes.input}>
                          <span className={classes.input_name} id="name">name</span><input type="text" onChange={inputName}></input>
                      </div>
                      <div className={classes.input}>
                          <span className={classes.input_name} id="mail">mail</span><input type="email" onChange={inputMail}></input>
                      </div>
                      <div className={classes.input}>
                          <span className={classes.input_name} id="password">password</span><input type="password" onChange={inputPassword}></input>
                      </div>
                      <div className={classes.input}>
                          <span className={classes.input_name} id="confirm_password">confirm password</span><input type="password" onChange={inputConfirmPassword}></input>
                      </div>
                      <button className={classes.entry_button} onClick={entry}>entry</button>
                  </div>
              </div>
          </main>
        </>
    )
}