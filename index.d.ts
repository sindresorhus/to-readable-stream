/**
Convert a value to a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).

@param value - The value to convert to a stream.

@example
```
import toReadableStream from 'to-readable-stream';

toReadableStream('🦄🌈');
//=> ReadableStream<'🦄🌈'>
```
*/
export default function toReadableStream<Value>(value: Value): ReadableStream<Value>;
