import * as SelectPrimitive from "@radix-ui/react-select";
import * as HugeIcons from "hugeicons-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

interface SelectProps {
	label?: string;
	placeholder?: string;
	id: string;
	options: { value: string; label: string }[];
	icon?: keyof typeof HugeIcons;
	error?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export function Select({
	label,
	placeholder = label,
	id,
	options,
	error,
	icon,
	value,
	onChange,
}: SelectProps): JSX.Element {
	const [isFocused, setIsFocused] = useState(false);
	const [selectedValue, setSelectedValue] = useState<string | null>(value || null);

	useEffect(() => {
		if (value !== undefined) {
			setSelectedValue(value);
		}
	}, [value]);

	const handleFocus = () => setIsFocused(true);

	const handleBlur = () => setIsFocused(false);

	const handleClear = () => {
		setSelectedValue(null);
		onChange?.('');
	};

	const handleValueChange = (newValue: string) => {
		setSelectedValue(newValue);
		onChange?.(newValue);
	};

	const IconComponent = icon ? (HugeIcons[icon] as React.ElementType) : null;

	return (
		<div className="flex flex-col w-full">
			{label && (
				<label
					htmlFor={id}
					className="text-sm font-medium text-gray-700 mb-1 uppercase"
				>
					{label}
				</label>
			)}

			<SelectPrimitive.Root
				value={selectedValue || undefined}
				onValueChange={handleValueChange}
			>
				<div className="relative">
					<SelectPrimitive.Trigger
						id={id}
						className={cn(
							"flex items-center justify-between w-full px-4 py-2.5 text-left",
							"bg-white border border-gray-200 rounded-lg",
							"focus:outline-none focus:ring-2 focus:ring-orange-base focus:border-transparent",
							"hover:border-gray-300 transition-colors duration-200",
							isFocused ? "border-orange-base" : ""
						)}
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						<div className="flex items-center gap-2">
							{IconComponent && (
								<IconComponent
									size={20}
									className={cn(
										"text-gray-400",
										isFocused || selectedValue ? "text-orange-base" : ""
									)}
								/>
							)}
							<SelectPrimitive.Value
								placeholder={placeholder}
								className={cn(
									"text-gray-900",
									!selectedValue && "text-gray-400"
								)}
							/>
						</div>
						<div className="flex items-center gap-2">
							{selectedValue && (
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										handleClear();
									}}
									className="p-0.5 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-500"
								>
									<HugeIcons.Cancel01Icon size={16} />
								</button>
							)}
							<SelectPrimitive.Icon>
								<HugeIcons.ArrowDown01Icon
									size={20}
									className="text-gray-400"
								/>
							</SelectPrimitive.Icon>
						</div>
					</SelectPrimitive.Trigger>

					<SelectPrimitive.Portal>
						<SelectPrimitive.Content
							position="popper"
							className="z-50 w-[var(--radix-select-trigger-width)] bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
						>
							<SelectPrimitive.Viewport>
								{options.map((option) => (
									<SelectPrimitive.Item
										key={option.value}
										value={option.value}
										className={cn(
											"flex items-center justify-between px-4 py-2.5",
											"text-gray-900 focus:bg-orange-50 focus:outline-none",
											"data-[highlighted]:bg-orange-50 data-[highlighted]:outline-none",
											"cursor-pointer hover:bg-orange-50"
										)}
									>
										<SelectPrimitive.ItemText>
											{option.label}
										</SelectPrimitive.ItemText>
										<SelectPrimitive.ItemIndicator>
											<HugeIcons.Tick02Icon
												size={16}
												className="text-orange-base"
											/>
										</SelectPrimitive.ItemIndicator>
									</SelectPrimitive.Item>
								))}
							</SelectPrimitive.Viewport>
						</SelectPrimitive.Content>
					</SelectPrimitive.Portal>
				</div>
			</SelectPrimitive.Root>

			{error && (
				<div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
					<HugeIcons.AlertCircleIcon size={14} />
					<span>{error}</span>
				</div>
			)}
		</div>
	);
}
