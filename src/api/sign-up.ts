import { api } from "../lib/axios";

export interface SignUpPayload {
	name: string;
	phone: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}

export async function signUp({
	name,
	phone,
	email,
	password,
	passwordConfirmation,
}: SignUpPayload) {
	await api.post("/sellers", {
		name,
		phone,
		email,
		password,
		passwordConfirmation,
	});
}
