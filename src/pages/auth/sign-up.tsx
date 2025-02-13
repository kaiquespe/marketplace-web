import * as Separator from "@radix-ui/react-separator";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { signUp } from "../../api/sign-up";
import { AvatarUpload } from "../../components/avatar-upload";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

const signUpSchema = z.object({
	name: z.string(),
	phone: z.string(),
	email: z.string().email(),
	password: z.string().min(8),
	passwordConfirmation: z.string().min(8),
	avatarId: z.string(),
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
				avatarId: data.avatarId,
				email: data.email,
				name: data.name,
				password: data.password,
				passwordConfirmation: data.passwordConfirmation,
				phone: data.phone,
			});

			toast.success("Account created successfully!");
			reset();
		} catch (error) {
			console.error("Error during sign-up", error);
			toast.error("An error occurred while creating your account.");
		}
	}

	return (
		<div className="flex flex-col justify-start gap-32 w-full">
			<form className="flex flex-col gap-12 w-full">
				<div className="flex flex-col gap-2">
					<h1 className="text-gray-500 title-md">Sign up</h1>
					<p className="text-gray-300 text-sm">
						Welcome! Please sign up to create your account.
					</p>
				</div>
				<div className="flex flex-col gap-5 w-full">
					<div className="flex flex-col gap-2">
						<h3>Profile</h3>
						<AvatarUpload />
						<Separator.Root
							className="bg-transparent w-full h-2"
							orientation="horizontal"
						/>
						<Controller
							name="name"
							control={control}
							render={({ field }) => (
								<Input
									id="name"
									type="text"
									error={errors.name?.message}
									icon="UserIcon"
									label="Name"
									placeholder="Type your name"
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
									label="Phone"
									placeholder="Type your phone"
									{...field}
								/>
							)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<h3>Access</h3>
						<Controller
							name="email"
							control={control}
							render={({ field }) => (
								<Input
									id="email"
									type="email"
									error={errors.email?.message}
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
									error={errors.password?.message}
									icon="LockIcon"
									label="Password"
									placeholder="Type your password"
									{...field}
								/>
							)}
						/>
						<Controller
							name="passwordConfirmation"
							control={control}
							render={({ field }) => (
								<Input
									id="passwordConfirmation"
									type="password"
									error={errors.passwordConfirmation?.message}
									icon="LockIcon"
									label="Password Confirmation"
									placeholder="Confirm your password"
									{...field}
								/>
							)}
						/>
					</div>
				</div>
				<Button
					label="Sign in"
					onClick={handleSubmit(handleSignUp)}
					size="md"
					variant="solid"
					icon="ArrowRight02Icon"
					iconPosition="right"
				/>
			</form>
			<div className="flex flex-col gap-2">
				<p>Already have an account? </p>
				<Button
					label="Sign in"
					onClick={handleSignIn}
					size="md"
					variant="outline"
					disabled={isSubmitting}
				/>
			</div>
		</div>
	);
}
