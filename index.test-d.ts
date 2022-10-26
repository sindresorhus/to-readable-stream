import {Buffer} from 'node:buffer';
import {expectType} from 'tsd';
import toReadableStream from './index.js';

expectType<ReadableStream<string>>(toReadableStream('🦄🌈'));
expectType<ReadableStream<Buffer>>(toReadableStream(Buffer.from('🦄🌈')));
expectType<ReadableStream<Uint8Array>>(toReadableStream(new Uint8Array(Buffer.from('🦄🌈').buffer)));
