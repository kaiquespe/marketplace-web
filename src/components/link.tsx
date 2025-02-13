import * as HugeIcons from "hugeicons-react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
	label: string;
	icon?: keyof typeof HugeIcons;
	iconPosition?: "left" | "right";
	to: string;
}

export function Link({
	label,
	icon,
	iconPosition = "left",
	to,
}: LinkProps): JSX.Element {
	const IconComponent = icon ? (HugeIcons[icon] as React.ElementType) : null;
	const iconProps = { strokeWidth: 2, size: 16 };

	return (
		<RouterLink
			to={to}
			className="flex justify-between items-center gap-2 focus:ring-opacity-50 p-[2px] focus:ring-2 focus:ring-orange-base w-full font-medium text-orange-base text-sm hover:text-orange-dark transition-colors duration-200 focus:outline-none"
		>
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
		</RouterLink>
	);
}
