# to-readable-stream

> Convert a value to a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)

Not to be confused with [Node.js `stream.Readable`](https://nodejs.org/api/stream.html#stream_class_stream_readable), in which case, [`stream.Readable#from()`](https://nodejs.org/api/stream.html#stream_stream_readable_from_iterable_options) should be used instead.

## Install

```sh
npm install to-readable-stream
```

## Usage

```js
import toReadableStream from 'to-readable-stream';

toReadableStream('🦄🌈');
//=> ReadableStream<'🦄🌈'>
```

## API

### toReadableStream(value)

Returns a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream).

#### value

The value to convert to a stream.

## Related

- [into-stream](https://github.com/sindresorhus/into-stream) - More advanced version of this package
- [get-stream](https://github.com/sindresorhus/get-stream) - The opposite of this package
