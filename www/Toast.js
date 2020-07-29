var exec = require('cordova/exec');

exports.showToast = function (msg, success, error) {
    exec(success, error, 'Toast', 'showToast', [msg]);
};
