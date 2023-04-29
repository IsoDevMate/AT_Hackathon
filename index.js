// Set your app credentials
const credentials = {
    apiKey: 'f745377f9a66d5e48751c8137eeb0be7dbe040901e7ab6deb61e4819d0d07e67',
    username: 'IsoDevMate',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the airtime service
const airtime = AfricasTalking.AIRTIME;//ensure the AIRTIME is in caps
const PhoneNumber='0769784198'
const amount=40
const currenyCode="KES"
function sendAirtime() {
    const options = {
        recipients: [{
            phoneNumber: PhoneNumber,
            currencyCode: currenyCode,
            amount: amount
        }]
    };

    // That's it hit send and we'll take care of the rest
    airtime.send(options)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
}

sendAirtime();