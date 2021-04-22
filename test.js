import {Readable as ReadableStream} from 'stream';
import test from 'ava';
import getStream from 'get-stream';
import toReadableStream from './index.js';

const fixture = 'foo bar';

test('string', async t => {
	const stream = toReadableStream(fixture);
	t.true(stream instanceof ReadableStream);
	t.is(await getStream(stream), fixture);
});

test('buffer', async t => {
	const stream = toReadableStream(Buffer.from(fixture));
	t.is(await getStream(stream), fixture);
});
