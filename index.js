import {Readable as ReadableStream} from 'node:stream';

export default function toReadableStream(value) {
	return new ReadableStream({
		read() {
			this.push(value);
			this.push(null);
		}
	});
}
