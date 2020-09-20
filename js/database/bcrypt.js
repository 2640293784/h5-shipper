"use strict";
var bcrypt = require('bcryptjs');
//加密
var enbcrypt = function (password) {
    var salt = bcrypt.genSaltSync(5);
    var hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    return hash;
};
//解密
var decrypt = function (password, hash) {
    return bcrypt.compareSync(password, hash);
};
module.exports = {
    enbcrypt: enbcrypt,
    decrypt: decrypt
};
