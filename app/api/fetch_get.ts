export async function FetchGet() {
    const data = {
        collectionName: "test_izumi_data",
        name: "hogehoge"
    };
    const params = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };
    const r = await fetch("http://os3-282-30802.vs.sakura.ne.jp/find", params).then(req => req.json() ).then( data => {
        console.log(data);
        return data.result;
    });

    return r;
}