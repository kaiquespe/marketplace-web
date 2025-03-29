import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../api/sign-in";
import { toast } from "sonner";
import { useForm, Controller } from 'react-hook-form';

const signInSchema = z.object({
	email: z.string().email(),
	password: z.string(),
});

type SignInFormData = z.infer<typeof signInSchema>;

export function SignIn() {
	const navigate = useNavigate();

	const { mutateAsync } = useMutation({
		mutationFn: signIn,
	});

	const { control, handleSubmit, formState: { isSubmitting } } = useForm<SignInFormData>({
		defaultValues: {
			email: "",
			password: "",
		}
	});

	async function handleSignIn(data: SignInFormData) {
		try {
			await mutateAsync({
				email: data.email,
				password: data.password,
			})
			navigate("/");
		} catch (error) {
			console.error(error);
			toast.error("Falha ao fazer login");
		}
	}

	function handleSignUp() {
		navigate("/sign-up");
	}

	return (
		<div className="flex flex-col gap-8">
			<div>
				<h1 className="text-2xl font-medium text-gray-900 mb-2">Acesse sua conta</h1>
				<p className="text-gray-500">
					Informe seu e-mail e senha para entrar
				</p>
			</div>

			<form className="flex flex-col gap-6" onSubmit={handleSubmit(handleSignIn)}>
				<Controller 
					name="email"
					control={control}
					render={({ field }) => (
						<Input
							id="email"
							type="email"
							error=""
							icon="Mail01Icon"
							label="E-mail"
							placeholder="Seu e-mail cadastrado"
							{...field}
						/>
					)}
				/>
				<Controller 
					name="password"
					control={control}
					render={({ field }) => (
						<Input
							id="password"
							type="password"
							error=""
							icon="LockIcon"
							label="Senha"
							placeholder="Sua senha de acesso"
							{...field}
						/>
					)}
				/>

				<Button
					label="Acessar"
					type="submit"
					size="md"
					variant="solid"
					disabled={isSubmitting}
				/>
			</form>

			<div className="flex flex-col items-center gap-4">
				<p className="text-gray-500">Ainda não tem uma conta?</p>
				<Button
					label="Cadastrar"
					onClick={handleSignUp}
					size="md"
					variant="outline"
					disabled={isSubmitting}
				/>
			</div>
		</div>
	);
}
