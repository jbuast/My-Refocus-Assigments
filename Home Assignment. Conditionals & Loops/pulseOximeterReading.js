// A function that determines that alerts their oxygen saturation.
function oxygenSaturation(oxySaturation){
    let oxyObservation = oxySaturation;
    if (oxyObservation > 95) {
        console.log(`Normal Reading.`);
    }
    else if (oxyObservation === 95) {
        console.log(`Acceptable to continue home monitoring.`);
    }
    else if (oxyObservation >= 92 && oxyObservation < 95) {
        console.log(`Seek advice from health professionals.`);
    }
    else if (oxyObservation < 92 ) {
        console.log(`Seek urgent medical advice.`);
    }
    else {
        console.log(`The input is not numerical`);
    }
}

function pulseRate(rate){
    let rateObservation = rate;
    if (rateObservation >= 40 && rateObservation <= 100 ) {
        console.log(`Normal Reading.`);
    }
    else if (rateObservation >= 101 && rateObservation <= 109 ) {
        console.log(`Acceptable to continue home monitoring.`);
    }
    else if (rateObservation >= 110 && rateObservation <= 130 ) {
        console.log(`Seek advice from health professionals.`);
    }
    else if (rateObservation >= 131 ) {
        console.log(`Seek urgent medical advice.`);
    }
    else {
        console.log(`The input is not numerical`);
    }
}
oxygenSaturation(95);
pulseRate(45);