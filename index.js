'use strict';
const {Readable: ReadableStream} = require('stream');

const toReadableStream = input => (
	new ReadableStream({
		read() {
			this.push(input);
			this.push(null);
		}
	})
);

module.exports = toReadableStream;
module.exports.default = toReadableStream;
