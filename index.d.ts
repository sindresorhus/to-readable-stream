/**
Convert a `string`/`Buffer`/`Uint8Array` to a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).

@param value - Value to convert to a stream.

@example
```
import toReadableStream from 'to-readable-stream';

toReadableStream('🦄🌈');
//=> ReadableStream<'🦄🌈'>
```
*/
export default function toReadableStream<Value>(value: Value): ReadableStream<Value>;
