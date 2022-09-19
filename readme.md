# to-readable-stream

> Convert a string/Buffer/Uint8Array to a [Node.js `stream.Readable`](https://nodejs.org/api/stream.html#stream_class_stream_readable), which should not be confused with [`ReadableStream`](https://nodejs.org/api/webstreams.html#webstreams_class_readablestream)

If you target Node.js 12 or later, you can use [`stream.Readable#from()`](https://nodejs.org/api/stream.html#stream_stream_readable_from_iterable_options) instead.

## Install

```sh
npm install to-readable-stream
```

## Usage

```js
import toReadableStream from 'to-readable-stream';

toReadableStream('🦄🌈').pipe(process.stdout);
```

## API

### toReadableStream(value)

Returns a [`stream.Readable`](https://nodejs.org/api/stream.html#stream_class_stream_readable).

#### value

Type: `string | Buffer | Uint8Array`

Value to convert to a stream.

## Related

- [into-stream](https://github.com/sindresorhus/into-stream) - More advanced version of this package
- [get-stream](https://github.com/sindresorhus/get-stream) - The opposite of this package
