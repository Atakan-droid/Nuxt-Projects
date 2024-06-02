import fs from "node:fs";

export default eventHandler((event) => {
	console.log("event", event);

	useStorage("filesystem");
	fs.writeFileSync("data.txt", "Hello, world!");

	event.context.auth = {
		name: "test",
		role: "admin",
	};
});
