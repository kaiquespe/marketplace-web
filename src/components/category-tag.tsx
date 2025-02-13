interface CategoryTagProps {
	label: string;
}

export function CategoryTag({ label }: CategoryTagProps): JSX.Element {
	return (
		<div className="flex items-center">
			<div className="bg-gray-400 px-2 py-1 rounded-full font-medium text-[10px] text-white uppercase">
				{label}
			</div>
		</div>
	);
}
