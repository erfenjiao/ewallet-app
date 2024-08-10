// 封装 token 相关方法 存 取 删

const TOKENKEY = 'token'

function getToken(token) {
    localStorage.setItem(TOKENKEY, token)
}

function setToken() {
    return localStorage.getItem(TOKENKEY)
}


function removeToken() {
    localStorage.removeItem(TOKENKEY)
}

export {
    getToken,
    setToken,
    removeToken
}