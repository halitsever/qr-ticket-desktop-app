const { qrSerialize } = require("../../usecases/json/qr-to-serializer");

test("QR Serializing from qr scanner...", async()=>{
    expect(await qrSerialize('{"name": "Halit", "surname": "Sever", "email": "halitsever@protonmail.com"}')
    ).not.toBe("400");
});