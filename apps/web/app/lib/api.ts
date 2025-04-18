const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const login = async (email: string, password: string) => {
	try {
		const response = await fetch(`${BASE_URL}/users/login`, {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
			}),
		});
		if (!response.ok) {
			return response;
		}

		return response.json();
	} catch (error: any) {
		console.log(error);
		throw new Error(error.message);
	}
};

export const signUp = async (email: string, password: string) => {
	try {
		const response = await fetch(`${BASE_URL}/users/sign-up`, {
			method: "POST",
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) {
			return response;
		}
		return response.json();
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export const getPortraits = async () => {
	try {
		const response = await fetch(`${BASE_URL}/images/bulk`);

		if (!response.ok) {
			return response;
		}
		return response.json();
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export const getSignedUrl = async () => {
	const response = await fetch(`${BASE_URL}/pre-signed-url`);
	if (!response.ok) {
		return response;
	}

	return response.json();
};

export const uploadFiles = async (url: string, content: Blob) => {
	const response = await fetch(`${url}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/zip",
		},
		body: JSON.stringify(content),
	});
	if (!response.ok) {
		return response;
	}

	return response.json();
};
