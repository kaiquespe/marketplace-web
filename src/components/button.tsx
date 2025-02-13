import * as HugeIcons from "hugeicons-react";
import { cn } from "../lib/utils";

interface ButtonProps {
	label: string;
	size?: "sm" | "md";
	variant?: "solid" | "outline" | "link";
	icon?: keyof typeof HugeIcons;
	iconPosition?: "left" | "right";
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit";
}

export function Button({
	label,
	size = "md",
	variant = "solid",
	icon,
	iconPosition = "left",
	onClick,
	disabled,
	type = "button",
}: ButtonProps): JSX.Element {
	const iconProps =
		size === "sm" ? { strokeWidth: 2, size: 16 } : { strokeWidth: 2, size: 24 };

	const IconComponent = icon ? (HugeIcons[icon] as React.ElementType) : null;

	const buttonClasses = cn(
		"flex w-full items-center gap-2 justify-between font-medium transition-colors duration-200 focus:outline-none",
		size === "sm" ? "text-sm" : "text-base",
		variant === "link"
			? "p-[2px] text-orange-base hover:text-orange-dark focus:ring-2 focus:ring-orange-base focus:ring-opacity-50" // Estilos de link
			: "rounded-lg focus:ring-2 focus:ring-orange-base focus:ring-opacity-50", // Estilos de botão padrão
		size === "sm" && variant !== "link" ? "px-4 h-10" : "",
		size === "md" && variant !== "link" ? "px-4 h-14" : "",
		variant === "outline"
			? "border border-orange-base text-orange-base bg-white hover:text-orange-dark hover:border-orange-dark"
			: "",
		variant === "solid" ? "bg-orange-base text-white hover:bg-orange-dark" : "",
		disabled ? "opacity-50 cursor-not-allowed" : "",
	);

	return (
		<button type={type} className={buttonClasses} onClick={onClick}>
			{icon && iconPosition === "left" && (
				<span className="mr-2">
					{IconComponent && <IconComponent {...iconProps} />}
				</span>
			)}

			<span>{label}</span>

			{icon && iconPosition === "right" && (
				<span className="ml-2">
					{IconComponent && <IconComponent {...iconProps} />}
				</span>
			)}
		</button>
	);
}
