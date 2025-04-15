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
