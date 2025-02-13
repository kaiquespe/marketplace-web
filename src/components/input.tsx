import * as HugeIcons from "hugeicons-react";
import type React from "react";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { cn } from "../lib/utils";

interface InputProps {
	label?: string;
	placeholder?: string;
	id: string;
	type: "text" | "password" | "number" | "email" | "tel";
	icon?: keyof typeof HugeIcons;
	error?: string;
	value?: string;
	onChange?: (value: string) => void;
	onBlur?: () => void;
}

export function Input({
	label,
	placeholder = label,
	id,
	type,
	icon,
	error,
	value = "",
	onChange,
	onBlur,
}: InputProps): JSX.Element {
	const [showPassword, setShowPassword] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
    setIsFocused(false);
    onBlur?.(); // Call the provided onBlur handler
  };

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsFilled(e.target.value.length > 0);
		onChange?.(e.target.value); // Update the form value
	}

	const IconComponent = icon ? (HugeIcons[icon] as React.ElementType) : null;

	return (
		<div className={cn("flex flex-col mb-5 w-full")}>
			{label && (
				<label
					htmlFor={id}
					className={cn(
						"label-md uppercase",
						isFocused ? "text-orange-base" : "text-gray-300",
					)}
				>
					{label}
				</label>
			)}
			<div className="relative flex items-center">
				{IconComponent && (
					<div
						className={cn(
							"absolute left-0 pl-0",
							isFocused || isFilled ? "text-orange-base" : "text-gray-300",
						)}
					>
						<IconComponent />
					</div>
				)}

				{["text", "email", "tel"].includes(type) && (
					<input
						placeholder={placeholder}
						type={type}
						id={id}
						onChange={handleChange}
						className={cn(
							"w-full px-3 py-2 border-b border-gray-100 focus:outline-none focus:border-gray-400 text-gray-400 body-md placeholder-gray-200",
							icon && "pl-10",
						)}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
				)}

				{type === "password" && (
					<>
						<input
							placeholder={placeholder}
							type={showPassword ? "text" : type}
							id={id}
							value={value}
							onChange={handleChange}
							className={cn(
								"w-full px-3 py-2 border-b border-gray-100 focus:outline-none focus:border-gray-400 text-gray-400 body-md placeholder-gray-200",
								icon && "pl-10",
								"pr-10",
							)}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div
							className={cn(
								"absolute right-0 pr-3 cursor-pointer",
								isFocused ? "text-orange-base" : "text-gray-300",
							)}
							onClick={togglePasswordVisibility}
						>
							{showPassword ? (
								<HugeIcons.ViewOffIcon />
							) : (
								<HugeIcons.ViewIcon />
							)}
						</div>
					</>
				)}

				{type === "number" && (
					<NumericFormat
						placeholder={placeholder}
						id={id}
						className={cn(
							"w-full px-3 py-2 border-b border-gray-100 focus:outline-none focus:border-gray-400 text-gray-400 body-md placeholder-gray-200",
							icon && "pl-10",
						)}
						onFocus={handleFocus}
						onBlur={handleBlur}
						value={value}
						allowNegative={false}
						prefix="$ "
						decimalScale={2}
						fixedDecimalScale={true}
					/>
				)}
			</div>
			{error && (
				<div className="flex items-center mt-2 text-danger body-xs">
					<HugeIcons.AlertCircleIcon className="mr-1 w-4 h-4" />
					{error}
				</div>
			)}
		</div>
	);
}
