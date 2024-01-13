const sendFakePost = async (formData) => {
	try {
		const res = await fetch(
			'https://jsonplaceholder.typicode.com/posts/',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			}
		);
		if (res.ok) {
			console.log(res);
			const data = await res.json();
			console.log('Fake Post Response:', data);
		} else {
			alert('Invalid form');
		}
		return { status: true, message: 'Success' };
	} catch (error) {
		console.error('Error during Fake Post:', error);
	}
};

const sendError = async () => {
	try {
		const res = await fetch(
			'https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-error.json'
		);
		if (res.ok) {
			console.log(res);
		}
		return res.json();
	} catch (error) {
		console.error('Error during Send Erro:', error);
	}
};

const sendSuccess = async () => {
	try {
		const res = await fetch(
			'https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey-post-success.json'
		);

		if (res.ok) {
			console.log(res);
			console.log('Sucesso! Tudo certo.');
			alert('Sucesso! Tudo certo.');
		}
	} catch (error) {
		console.error('Error during Send Success:', error);
	}
};

export { sendFakePost, sendError, sendSuccess };
