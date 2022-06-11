const { saveAsJsonFile } = require("../../usecases/json/save-json-file");

test("Testing saving json file...", async () => {
    expect(await saveAsJsonFile({ "name": "Halit", "surname": "Sever", "email": "halitsever@protonmail.com" })
    ).toBe("200");
});