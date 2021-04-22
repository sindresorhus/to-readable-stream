import {Readable as ReadableStream} from 'node:stream';

/**
Convert a `string`/`Buffer`/`Uint8Array` to a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams).

@param value - Value to convert to a stream.

@example
```
import toReadableStream from 'to-readable-stream';

toReadableStream('🦄🌈').pipe(process.stdout);
```
*/
export default function toReadableStream(value: string | Buffer | Uint8Array): ReadableStream;
