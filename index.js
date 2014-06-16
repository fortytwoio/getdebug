var debugModule = require("debug");
var path = require("path");

var applicationName = "";
var applicationRootPath;
var addPid = true;

if (process.env.APP_ROOT) {
    applicationRootPath = process.env.APP_ROOT;
}
else {
    applicationRootPath = process.cwd();
}


if (process.env.APP_NAME) {
    applicationName = process.env.APP_NAME;
}
else {
    applicationName = path.basename(applicationRootPath);
}

if (process.env.DEBUG_PID) {
    var dpid = process.env.DEBUG_PID.toLowerCase();
    if (dpid === "yes" || dpid === "true" || dpid === "y") {
        addPid = true;
    }
    else {
        addPid = false;
    }
}

exports = module.exports = function getDebug(namespace) {
    var relativePath = path.relative(applicationRootPath, namespace);
    var extname = path.extname(relativePath);
    var identifier = path.basename(relativePath, extname);

    var debugParts = path.dirname(relativePath).split(path.sep);
    debugParts.push(identifier);
    var relativeIdentifier = debugParts.join(":");
    var processIdString = "";
    if (addPid) {
        processIdString = "(" + process.pid + ")";
    }
    return debugModule(applicationName + processIdString + ":" + relativeIdentifier);
}
