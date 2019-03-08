/// <reference types="node"/>
import {Readable} from 'stream';

/**
 * Convert a `string`/`Buffer`/`Uint8Array` to a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams).
 *
 * @param input - Value to convert to a stream.
 */
export default function toReadableStream(
	input: string | Buffer | Uint8Array
): Readable;
