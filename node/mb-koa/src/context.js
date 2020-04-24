module.exports = {
    get url() {
        return this.request.url;
    },
    get method() {
        return this.request.method;
    },
    get body() {
        return this.response._body;
    },
    set body(val) {
        this.response._body = val;
    }
}