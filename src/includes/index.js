'use strict';

//Util 
const sqlData = require("./data/sql.json");
const sql = require("./util/sql");

exports.mysql = new sql({
    host: sqlData.ip,
    port: sqlData.port,
    username: sqlData.user,
    password: sqlData.password,
    database: sqlData.database
});
exports.output = require("./util/output");

//Structures
exports.CreateGuildSettings = require("./structures/CreateGuildSettings");
exports.CreateGuildConfig = require("./structures/CreateGuildConfig");
exports.CreateUser = require("./structures/CreateUser");
exports.GetGuild = require("./structures/GetGuild");
exports.GetUser = require("./structures/GetUser");