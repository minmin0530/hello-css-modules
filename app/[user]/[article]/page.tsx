"use client"
import { Header } from "@/app/components/Header";
import { usePathname } from "next/navigation";
import classes from "../../page.module.css"

export default function Article() {
    const pathname = usePathname()
    return (
        <main className={classes.main}>
            <div className={classes.description}>
                <Header name={pathname} />
            </div>
        </main>
    )
}