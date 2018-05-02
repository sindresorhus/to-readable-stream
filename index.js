'use strict';
const {Readable} = require('readable-stream');

module.exports = input => (
	new Readable({
		read() {
			this.push(input);
			this.push(null);
		}
	})
);
