const channelsArray = [
    "codeorg",
    "CoderbyteDevelopers",
    "Codesmith",
    "craigndave",
    "decomplexify",
    "Fireship",
    "freecodecamp",
    "funfunfunction",
    "KevinPowell",
    "NetNinja",
    "TraversyMedia",
    "WesBos",
];

const QRCode = require("qrcode");

const baseUrl = "https://www.youtube.com/@";
function generateQRcodePng(channelName: string): void {
    const path = `src/outputImages/qrcode_${channelName}.png`;
    const url = baseUrl + channelName;
    QRCode.toFile(
        path,
        url,
        {
            color: {
                dark: "#FF8FFD", // Blue dots
                light: "#FFFF", // Transparent background
            },
        },
        function (err: any) {
            if (err) throw err;
            console.log("done");
        }
    );
}
for (let channel of channelsArray) {
    generateQRcodePng(channel);
}
