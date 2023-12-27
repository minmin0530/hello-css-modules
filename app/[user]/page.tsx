"use client"

import { Header } from "../components/Header"
import { usePathname } from "next/navigation"
import classes from "../page.module.css"

export default function User() {
    const pathname = usePathname()

    return (
        <main className={classes.main}>
            <div className={classes.description}>
                <Header name={pathname} />
            </div>
        </main>
    )
}