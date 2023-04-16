class Ajax {
    async get(url) {
        //const url1 = 'http://127.0.0.1:8000/shop/performance/1/'
        const response = await fetch(url, {
            method: "GET"
        });
        const responseData = await response.json();

        return {
            status: response.status,
            data: responseData
        };
    }
}
export const ajax = new Ajax();