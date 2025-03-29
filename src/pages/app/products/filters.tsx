import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Select } from "../../../components/select";
import { useProductFilters } from "../../../hooks/useProductFilters";
import { PRODUCT_STATUS_OPTIONS } from "../../../config";

export function Filters() {
	const { filters, handleSearchChange, handleStatusChange, handleApplyFilters } = useProductFilters();

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
					value={filters.search}
					onChange={handleSearchChange}
				/>
				<Select
					options={PRODUCT_STATUS_OPTIONS}
					error=""
					id="status"
					icon="SaleTag02Icon"
					placeholder="Select a status"
					value={filters.status}
					onChange={handleStatusChange}
				/>

				<Button
					label="Apply filters"
					onClick={handleApplyFilters}
					size="md"
					variant="solid"
				/>
			</form>
		</aside>
	);
}
