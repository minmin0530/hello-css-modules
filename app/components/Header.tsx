type Props = {
    name: string
}

export function Header(props: Props) {
    const names = props.name.split("/");
    return (
        <h2>
            {names[names.length - 1]}
        </h2>
    )
}