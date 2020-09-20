"use strict";
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '123456',
    database: "nodemysql",
    dateStrings: true
});
var operation = function (sql, params) {
    return new Promise(function (resolve, reject) {
        connection.query(sql, params, function (err, results, fields) {
            if (err) {
                console.log('*****database operation failed*****');
                reject(new Error(err));
                return;
            }
            ;
            console.log('*****database operation success*****');
            //将查询出来的数据返回给回调函数
            resolve({ results: results, fields: fields });
        });
    });
};
//数据库链接
exports.connect = function () {
    return new Promise(function (resolve, reject) {
        connection.connect(function (err) {
            if (err) {
                console.log('*****database connection failed*****');
                reject(new Error(err));
            }
            ;
            console.log('*****database connection success*****');
            resolve();
        });
    });
};
//向表中新增数据
exports.add = function (table, fields) {
    return new Promise(function (resolve, reject) {
        var keys = Object.keys(fields);
        var values = Object.values(fields);
        var addSql = "INSERT INTO " + table + "(" + keys.toString() + ") VALUES(" + values.toString() + ")";
        connection.query(addSql, function (err, results, fields) {
            if (err) {
                console.log("*****Failed to add data to table " + table + "*****");
                reject(new Error(err));
                return;
            }
            ;
            console.log("*****success to add data to table " + table + "*****");
            //将查询出来的数据返回给回调函数
            resolve({ results: results, fields: fields });
        });
    });
};
//删除表中数据
exports.remove = function (table, fields, value) {
    return new Promise(function (resolve, reject) {
        var isArr = value instanceof Array;
        var newVal = isArr ? value.toString() : value;
        var removeSql = "DELETE FROM " + table + " where " + fields + " " + (isArr ? 'in' : '=') + " " + newVal;
        connection.query(removeSql, function (err, results, fields) {
            if (err) {
                console.log(err);
                console.log("*****Failed to add data to table " + table + "*****");
                reject(new Error(err));
                return;
            }
            ;
            console.log("*****success to add data to table " + table + "*****");
            //将查询出来的数据返回给回调函数
            resolve({ results: results, fields: fields });
        });
    });
};
//更新表中数据
exports.update = function (table, fields, updateFields) {
    return new Promise(function (resolve, reject) {
        var keys = Object.keys(fields);
        var values = Object.values(fields);
        var updateSql = "UPDATE " + table + "(" + keys.toString() + ") VALUES(" + values.toString() + ")";
        connection.query(updateSql, function (err, results, fields) {
            if (err) {
                console.log(err);
                console.log("*****Failed to add data to table " + table + "*****");
                reject(new Error(err));
                return;
            }
            ;
            console.log("*****success to add data to table " + table + "*****");
            //将查询出来的数据返回给回调函数
            resolve({ results: results, fields: fields });
        });
    });
};
//查询数据
exports.query = function (table, fields) {
    return new Promise(function (resolve, reject) {
        var fieldsLen = Object.keys(fields).length;
        var querySql = '';
        var fieldsArr = [];
        for (var key in fields) {
            fieldsArr.push(key + "=" + fields[key]);
        }
        if (fieldsLen === 0) {
            querySql = "SELECT * FROM " + table;
        }
        else {
            querySql = "SELECT * FROM " + table + " where " + fieldsArr.join(' and ');
        }
        connection.query(querySql, function (err, results, fields) {
            if (err) {
                console.log(err);
                console.log("*****Failed to add data to table " + table + "*****");
                reject(new Error(err));
                return;
            }
            ;
            console.log("*****success to add data to table " + table + "*****");
            //将查询出来的数据返回给回调函数
            resolve({ results: results, fields: fields });
        });
    });
};
