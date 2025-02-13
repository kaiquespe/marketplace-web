import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Select } from "../../../components/select";

export function Filters() {
	return (
		<aside className="flex flex-col gap-6 bg-white p-6 rounded-[20px]">
			<h3 className="text-gray-300 title-sm">Filters</h3>

			<form className="flex flex-col gap-4">
				<Input
					id="search"
					type="text"
					error=""
					icon="Search01Icon"
					placeholder="Search for products"
				/>
				<Select
					options={[
						{ label: "All status", value: "all" },
						{ label: "Published", value: "published" },
						{ label: "Sold", value: "sold" },
						{ label: "Inactive", value: "inactive" },
					]}
					error=""
					id="status"
					icon="SaleTag02Icon"
					placeholder="Select a status"
				/>

				<Button
					label="Apply filters"
					onClick={() => {}}
					size="md"
					variant="solid"
				/>
			</form>
		</aside>
	);
}
