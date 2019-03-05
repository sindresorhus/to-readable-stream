'use strict';
const {Readable: ReadableStream} = require('stream');

module.exports = input => (
	new ReadableStream({
		read() {
			this.push(input);
			this.push(null);
		}
	})
);
