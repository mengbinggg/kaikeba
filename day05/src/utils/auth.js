import Cookies from 'js-cookie';
const Token = 'token';

function getToken() {
    return Cookies.get(Token);
}

function setToken(token) {
    return Cookies.set(Token, token);
}

function removeToken() {
    return Cookies.remove(Token);
}

export {
    getToken,
    setToken,
    removeToken
}