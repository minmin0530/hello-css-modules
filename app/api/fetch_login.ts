export async function FetchLogin(mail: string, password: string) {
    const data = {
        collectionName: "test_izumi_data",
        mail: mail,
        password: password,
    };
    const params = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };
    console.log(333);
    const r = await fetch("http://os3-282-30802.vs.sakura.ne.jp/login", params).then(req => req.json() ).then( data => {
        console.log(data.result);
        if (data.result == null) {
            return -1;
        }
        location.href = "http://localhost:3000/" + data.result.name + "/mypage";
        return 1;
    });
    return r;
}