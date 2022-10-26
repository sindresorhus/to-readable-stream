export default function toReadableStream(value) {
	return new ReadableStream({
		start(controller) {
			controller.enqueue(value);
			controller.close();
		},
	});
}
