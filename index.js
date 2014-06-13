var debugModule = require("debug");
var path = require("path");

exports = module.exports = function getDebug(applicationName, absolutePath) {
    return function (namespace) {
        var relativePath = path.relative(absolutePath, namespace);
        var extname = path.extname(relativePath);
        var identifier = path.basename(relativePath, extname);

        var debugParts = path.dirname(relativePath).split(path.sep);
        debugParts.push(identifier);
        var relativeIdentifier = debugParts.join(":");
        return debugModule(applicationName + "(" + process.pid + "):" + relativeIdentifier);
    }
};
