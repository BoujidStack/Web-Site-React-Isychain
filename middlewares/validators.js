exports.isEmpty = (string)=> {
    if (string.trim() === "") {
        return true;
    } else {
        return false
    } 
}
exports.isEmail = (email)=> {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailRegEx)) {
        return true
    } else {
        return false 
    }
}

exports.isText = (text) => {
    const textRegex = /^[a-zA-Z ]*$/
    if(text.match(textRegex)) {
        return true
    } else {
        return false
    }
}