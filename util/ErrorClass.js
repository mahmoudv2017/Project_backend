module.exports = (msg , statusCode) => {
    const errr = new Error(msg)
    errr.status = statusCode
    return errr
}