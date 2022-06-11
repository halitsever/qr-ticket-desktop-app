const { saveAsExcelFile } = require("../../usecases/excel/save-excel-file");

test("Testing saving excel file...", async () => {
    expect(await saveAsExcelFile({ "name": "Halit", "surname": "Sever", "email": "halitsever@protonmail.com" })
    ).toBe("200");
});