import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { signUp } from "../../api/sign-up";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

const signUpSchema = z.object({
	name: z.string(),
	phone: z.string(),
	email: z.string().email(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});

export type SignUpPayload = z.infer<typeof signUpSchema>;

export function SignUp() {
	const navigate = useNavigate();

	function handleSignIn() {
		navigate("/sign-in");
	}

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<SignUpPayload>();

	const { mutateAsync } = useMutation({
		mutationFn: signUp,
	});

	async function handleSignUp(data: SignUpPayload) {
		try {
			await mutateAsync({
				email: data.email,
				name: data.name,
				password: data.password,
				passwordConfirmation: data.confirmPassword,
				phone: data.phone,
			});

			toast.success("Conta criada com sucesso!");
			reset();
			navigate("/sign-in");
		} catch (error) {
			console.error("Error during sign-up", error);
			toast.error("Ocorreu um erro ao criar sua conta.");
		}
	}

	return (
		<div className="flex flex-col gap-8">
			<div>
				<h1 className="text-2xl font-medium text-gray-900 mb-2">Crie sua conta</h1>
				<p className="text-gray-500">
					Preencha seus dados pessoais e de acesso
				</p>
			</div>

			<form className="flex flex-col gap-6" onSubmit={handleSubmit(handleSignUp)}>
				<div>
					<h2 className="text-sm font-medium text-gray-700 mb-4">Perfil</h2>
					<div className="flex flex-col gap-4">
						<Controller
							name="name"
							control={control}
							render={({ field }) => (
								<Input
									id="name"
									type="text"
									error={errors.name?.message}
									icon="UserIcon"
									label="Nome completo"
									placeholder="Seu nome completo"
									{...field}
								/>
							)}
						/>
						<Controller
							name="phone"
							control={control}
							render={({ field }) => (
								<Input
									id="phone"
									type="tel"
									error={errors.phone?.message}
									icon="CallIcon"
									label="Telefone"
									placeholder="(00) 00000-0000"
									{...field}
								/>
							)}
						/>
					</div>
				</div>

				<div>
					<h2 className="text-sm font-medium text-gray-700 mb-4">Acesso</h2>
					<div className="flex flex-col gap-4">
						<Controller
							name="email"
							control={control}
							render={({ field }) => (
								<Input
									id="email"
									type="email"
									error={errors.email?.message}
									icon="Mail01Icon"
									label="E-mail"
									placeholder="Seu melhor e-mail"
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
									error={errors.password?.message}
									icon="LockIcon"
									label="Senha"
									placeholder="Sua senha de acesso"
									{...field}
								/>
							)}
						/>
						<Controller
							name="confirmPassword"
							control={control}
							render={({ field }) => (
								<Input
									id="confirmPassword"
									type="password"
									error={errors.confirmPassword?.message}
									icon="LockIcon"
									label="Confirmar senha"
									placeholder="Confirme sua senha"
									{...field}
								/>
							)}
						/>
					</div>
				</div>

				<Button
					label="Cadastrar"
					type="submit"
					size="md"
					variant="solid"
					disabled={isSubmitting}
				/>
			</form>

			<div className="flex flex-col items-center gap-4">
				<p className="text-gray-500">Já tem uma conta?</p>
				<Button
					label="Acessar"
					onClick={handleSignIn}
					size="md"
					variant="outline"
					disabled={isSubmitting}
				/>
			</div>
		</div>
	);
}
