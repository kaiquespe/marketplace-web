import { api } from '../lib/axios';

export interface SignInPayload {
  email: string;
  password: string;
}

export async function signIn(payload: SignInPayload) {
  await api.post('/sellers/sessions', payload);
}