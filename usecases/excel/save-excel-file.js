const XLSX = require("xlsx");

module.exports = {
    async saveAsExcelFile(participantarr) {
        var rowsWS = XLSX.utils.json_to_sheet([participantarr]);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, rowsWS, "participants");
        await XLSX.writeFile(wb, "../../participant-list.xlsx");
        return "200";
    }
};