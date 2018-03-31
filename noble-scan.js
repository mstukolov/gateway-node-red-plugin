var noble = require('noble');

noble.on('stateChange', function(state) {
    if (state === 'poweredOn')
        noble.startScanning();
    else
        noble.stopScanning();
});

/*
var serviceUUIDs = ["<service UUID 1>", ...]; // default: [] => all
var allowDuplicates = <false|true>; // default: false

noble.startScanning(serviceUUIDs, allowDuplicates[, callback(error)]);*/
