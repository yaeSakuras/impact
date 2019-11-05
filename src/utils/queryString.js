function queryString(type,str) {
    let obj = {};
    try {
        if (type === 1) {
            decodeURIComponent(str).replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => obj[k] = v);
        }
        if (type === 2) {
            for (let [key, value] of (new URLSearchParams(str).entries())) {
                obj[key] = value;
            }
        }
        return obj;
    }catch (e) {
        console.log(e);
    }
}

export {
    queryString
}