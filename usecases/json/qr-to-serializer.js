module.exports = {
    async qrSerialize(qrstring) {
        try {
        let jsonDataString = JSON.stringify(qrstring);
        let jsonData = JSON.parse(jsonDataString);
        return jsonData;
    }
    catch {
        return "400";
    }
    }
}