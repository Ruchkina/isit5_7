class Urls {
    constructor() {
        // this.url = 'http://localhost:8000/shop/';
        this.url = 'http://127.0.0.1:8000/';
            }

    stocks() {
        return `${this.url}/shop/performance/`
    }

    stock(id) {
        return `${this.url}shop/performance/${id}/`
    }
}

export const urls = new Urls()