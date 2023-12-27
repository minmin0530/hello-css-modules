import { Header } from "../../components/Header"
import classes from "../../page.module.css"

export default function MyPage() {

    return (
        <main className={classes.main}>
            <div className={classes.description}>
                <Header name="myPage!" />
            </div>
        </main>
    )
}