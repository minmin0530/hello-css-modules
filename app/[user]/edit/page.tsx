import { Header } from "../../components/Header"
import classes from "../../page.module.css"

export default function Edit() {

    return (
        <main className={classes.main}>
            <div className={classes.description}>
                <Header name="edit article..." />
            </div>
        </main>
    )
}