import * as HugeIcons from "hugeicons-react";
import { Link, type LinkProps, useLocation } from "react-router-dom";

export type NavLinkProps = LinkProps & {
	icon: keyof typeof HugeIcons;
};

export function NavLink({ children, ...props }: NavLinkProps) {
	const { pathname } = useLocation();

	const IconComponent = HugeIcons[props.icon] as React.ElementType;

	return (
		<Link
			data-current={pathname === props.to}
			className="flex items-center gap-1.5 data-[current=true]:bg-shape px-4 rounded-[10px] h-10 data-[current=true]:font-medium text-gray-300 data-[current=true]:text-orange-base hover:text-orange-base body-sm"
			{...props}
		>
			<IconComponent size={20} strokeWidth={2} />
			{children}
		</Link>
	);
}
