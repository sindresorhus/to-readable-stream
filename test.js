import {Readable} from 'stream';
import test from 'ava';
import getStream from 'get-stream';
import toReadableStream from '.';

const fixture = 'foo bar';

test('string', async t => {
	const stream = toReadableStream(fixture);
	t.true(stream instanceof Readable);
	t.is(await getStream(stream), fixture);
});

test('buffer', async t => {
	const stream = toReadableStream(Buffer.from(fixture));
	t.is(await getStream(stream), fixture);
});
