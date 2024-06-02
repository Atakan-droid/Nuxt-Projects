export default defineEventHandler((event) => {
	//validate event with zord, readValidateBody, readValidateQuery, readValidateParams
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				status: 200,
				body: {
					message: "Hello, world!",
				},
			});
		}, 1000);
	});
});
