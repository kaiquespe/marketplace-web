import { cn } from "../lib/utils";

interface TagProps {
	variant: "available" | "sold" | "cancelled";
}

export function StatusTag({ variant }: TagProps): JSX.Element {
	const getTagText = (variant: string) => {
		switch (variant) {
			case "available":
				return "Available";
			case "sold":
				return "Sold";
			case "cancelled":
				return "Cancelled";
			default:
				return "Cancelled";
		}
	};

	const classes = cn(
		"rounded-full px-2 py-1 font-medium text-[10px] uppercase",
		variant === "available" && "bg-blue-dark text-white",
		variant === "sold" && "bg-success text-white",
		variant === "cancelled" && "bg-gray-300 text-white",
	);

	return (
		<div className="flex items-center">
			<div className={classes}>{getTagText(variant)}</div>
		</div>
	);
}
