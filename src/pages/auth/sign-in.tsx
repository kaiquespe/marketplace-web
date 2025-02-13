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

	const { control, handleSubmit, formState: { isSubmitting} } = useForm<SignInFormData>({
		defaultValues: {
			email: "",
			password: "",
		}
	});

	async function handleSignIn(data: z.infer<typeof signInSchema>) {
		try {
			await mutateAsync({
				email: data.email,
				password: data.password,
			})
			navigate("/");
		} catch (error) {
			console.error(error);
			toast.error("Failed to sign in");
		}
	}

	function handleSignUp() {
		navigate("/sign-up");
	}

	return (
		<div className="flex flex-col gap-32 w-full">
			<form className="flex flex-col gap-12 w-full" onSubmit={handleSubmit(handleSignIn)}>
				<div className="flex flex-col gap-2">
					<h1 className="text-gray-500 title-md">Sign in</h1>
					<p className="text-gray-300 text-sm">
						Welcome back! Please sign in to your account.
					</p>
				</div>
				<div className="flex flex-col gap-5 w-full">
					<Controller 
						name="email"
						control={control}
						render={({ field }) => (
							<Input
								id="email"
								type="email"
								error=""
								icon="Mail01Icon"
								label="E-Mail"
								placeholder="Type your e-mail"
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
								label="Password"
								placeholder="Type your password"
								{...field}
							/>
						)}
					/>

				</div>
				<Button
					label="Sign in"
					type="submit"
					size="md"
					variant="solid"
					icon="ArrowRight02Icon"
					iconPosition="right"
				/>
			</form>
			<div className="flex flex-col gap-2">
				<p>Don't have an account? </p>
				<Button
					label="Sign up"
					onClick={handleSignUp}
					size="md"
					variant="outline"
					disabled={isSubmitting}
				/>
			</div>
		</div>
	);
}
