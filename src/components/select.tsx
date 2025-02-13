import * as SelectPrimitive from "@radix-ui/react-select";
import * as HugeIcons from "hugeicons-react";
import { useState } from "react";
import { cn } from "../lib/utils";

interface SelectProps {
	label?: string;
	placeholder?: string;
	id: string;
	options: { value: string; label: string }[];
	icon?: keyof typeof HugeIcons;
	error?: string;
}

export function Select({
	label,
	placeholder = label,
	id,
	options,
	error,
	icon,
}: SelectProps): JSX.Element {
	const [isFocused, setIsFocused] = useState(false);
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	const handleFocus = () => setIsFocused(true);

	const handleBlur = () => setIsFocused(false);

	const handleClear = () => {
		setSelectedValue(null);
	};

	const getSelectedLabel = () => {
		const selectedOption = options.find(
			(option) => option.value === selectedValue,
		);
		return selectedOption ? selectedOption.label : placeholder;
	};

	const IconComponent = icon ? (HugeIcons[icon] as React.ElementType) : null;

	return (
		<div className={cn("flex", "flex-col", "mb-5", "w-full")}>
			{label && (
				<label
					htmlFor={id}
					className={cn(
						"label-md",
						"uppercase",
						isFocused ? "text-orange-base" : "text-gray-300",
					)}
				>
					{label}
				</label>
			)}

			<SelectPrimitive.Root
				value={selectedValue || undefined}
				onValueChange={(value) => setSelectedValue(value)}
			>
				<div className="relative">
					<SelectPrimitive.Trigger
						id={id}
						className={cn(
							"relative",
							"flex",
							"w-full",
							"px-3",
							"py-2",
							"justify-between",
							"border-b",
							"border-gray-100",
							"focus:outline-none",
							"focus:border-gray-400",
							"text-gray-400",
							"body-md",
							"placeholder-gray-200",
							isFocused ? "text-orange-base" : "text-gray-300",
						)}
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						{IconComponent && (
							<div
								className={cn(
									"absolute",
									"left-0",
									"pl-0",
									isFocused || selectedValue
										? "text-orange-base"
										: "text-gray-300",
								)}
							>
								<IconComponent />
							</div>
						)}

						<div
							className={cn(
								"flex",
								"items-center",
								"w-full",
								icon ? "pl-7" : "",
								selectedValue === null && "text-gray-200",
							)}
						>
							<SelectPrimitive.Value placeholder={placeholder}>
								{getSelectedLabel()}
							</SelectPrimitive.Value>
						</div>

						<SelectPrimitive.Icon>
							<HugeIcons.ArrowDown01Icon />
						</SelectPrimitive.Icon>
					</SelectPrimitive.Trigger>

					{selectedValue && (
						<button
							type="button"
							onClick={handleClear}
							className="top-1/2 right-9 absolute bg-shape px-1 rounded-full text-gray-300 hover:text-gray-500 leading-none transform -translate-y-1/2"
							aria-label="Clear selection"
						>
							<HugeIcons.Cancel01Icon width={16} />
						</button>
					)}

					<SelectPrimitive.Content>
						<SelectPrimitive.Viewport className="flex flex-col items-start bg-white shadow-lg py-2 rounded-lg w-full">
							{options.map((option) => (
								<SelectPrimitive.Item
									key={option.value}
									value={option.value}
									className="flex justify-between items-center px-4 w-full h-12 data-[state=checked]:text-orange-base hover:text-orange-dark cursor-pointer"
								>
									<SelectPrimitive.ItemText>
										{option.label}
									</SelectPrimitive.ItemText>

									<SelectPrimitive.ItemIndicator>
										<HugeIcons.Tick02Icon />
									</SelectPrimitive.ItemIndicator>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Viewport>
					</SelectPrimitive.Content>
				</div>
			</SelectPrimitive.Root>

			{error && (
				<div
					className={cn(
						"flex",
						"items-center",
						"mt-2",
						"text-danger",
						"body-xs",
					)}
				>
					<HugeIcons.AlertCircleIcon className="mr-1 w-4 h-4" />
					{error}
				</div>
			)}
		</div>
	);
}
