import { Header } from "@/app/components/Header"
import classes from "../../../page.module.css"

export default function Edit() {

    return (
        <main className={classes.main}>
            <div className={classes.description}>
                <Header name="edit category article..." />
            </div>
        </main>
    )
}