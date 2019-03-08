import toReadableStream from '.';

toReadableStream('🦄🌈').pipe(process.stdout);
toReadableStream(Buffer.from('🦄🌈')).pipe(process.stdout);
toReadableStream(new Uint8Array(Buffer.from('🦄🌈').buffer)).pipe(
	process.stdout
);
