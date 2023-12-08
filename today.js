const getDate = () => {
    let time = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    return new Date(time);
}

module.exports = { getDate };