"use strict";

var parseUrl = require('url').parse;

var realFetch = require('node-fetch');
module.exports = function(url, options) {
	var urlParsed = parseUrl(url);

	if (!urlParsed.hostname && global.defaultHostname) {
		url = global.defaultHostname + url;
	}

	if (!urlParsed.protocol && global.defaultProtocol) {
		url = global.defaultProtocol + url;
	}

	return realFetch.call(this, url, options);
};

if (!global.fetch) {
	global.fetch = module.exports;
}
