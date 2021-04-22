# to-readable-stream

> Convert a string/Buffer/Uint8Array to a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams)

If you target Node.js 12 or later, you can use [`stream.Readable#from()`](https://nodejs.org/api/stream.html#stream_stream_readable_from_iterable_options) instead.

## Install

```
$ npm install to-readable-stream
```

## Usage

```js
import toReadableStream from 'to-readable-stream';

toReadableStream('🦄🌈').pipe(process.stdout);
```

## API

### toReadableStream(value)

Returns a [`stream.Readable`](https://nodejs.org/api/stream.html#stream_readable_streams).

#### value

Type: `string | Buffer | Uint8Array`

Value to convert to a stream.

## Related

- [into-stream](https://github.com/sindresorhus/into-stream) - More advanced version of this module

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-to-readable-stream?utm_source=npm-to-readable-stream&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
