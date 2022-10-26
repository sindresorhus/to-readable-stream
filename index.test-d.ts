import {Buffer} from 'node:buffer';
import toReadableStream from './index.js';
import {expectType} from 'tsd';

expectType<ReadableStream<string>>(toReadableStream('🦄🌈'));
expectType<ReadableStream<Buffer>>(toReadableStream(Buffer.from('🦄🌈')));
expectType<ReadableStream<Uint8Array>>(toReadableStream(new Uint8Array(Buffer.from('🦄🌈').buffer)));
