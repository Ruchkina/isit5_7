class Ajax {
    async get(url) {
        const response = await fetch(url, {
            method: "GET"
        });
        // if (response.ok) {
            // const json = await response.json();
            // console.log(json)
            // console.log("json")
        // } else {
        //     alert("Ошибка HTTP: " + response.status);
        // }

        const responseData = await response.json();
        console.log(responseData)

        return {
            status: response.status,
            data: responseData
        };
    }
}
export const ajax = new Ajax();