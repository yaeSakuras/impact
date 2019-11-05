export function objectToStr(obj) {
    //Object.keys(obj).map(key => `${key}=${encodeURIComponent(obj[key])}`).join('&');
    return Object.entries(obj).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&');
}
