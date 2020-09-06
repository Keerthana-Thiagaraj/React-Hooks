export function isValidUserName(value) {

    if ((!value) && !(value.length)) {
        return false
    }
    return true
}

export function isValidEmail(value) {

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(value)) {
        return false
    }
    return true
}

export function isValidPhoneNumber(value) {

    var phoneno = /^\d{10}$/;
    if (isNaN(value) || (!phoneno.test(value))) {
        return false
    }
    return true
}