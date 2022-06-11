
const fs = require("fs");

module.exports = {
   async saveAsJsonFile(jsonData) {
        var jsonContent = JSON.stringify(jsonData);

        await fs.writeFile("../../output.json", jsonContent, 'utf8', function (err) {
            if (err) return "400";
        });
        return "200";
    }
}
