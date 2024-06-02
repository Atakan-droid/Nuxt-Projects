export default defineEventHandler((event) => {
	const routerParam = getRouterParams(event);
	console.log("name", routerParam.name);
	return {
		message: "Base Api",
	};
});
