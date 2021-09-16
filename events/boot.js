var figlet = require('figlet');
const client = require("../index");

client.on("ready", () =>
    console.log('Welcome to the Simple Bot Template!\n This bot is from the CaldeiraG repo found here: https://github.com/CaldeiraG/discordbot \n We hope you enjoy using this Template! \n Let us know of any issues VIA the issues section on the REPO!'),
    figlet('CALDEIRAG', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    })
);
