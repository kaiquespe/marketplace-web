import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Select } from "../../../components/select";
import { useProductFilters } from "../../../hooks/useProductFilters";
import { PRODUCT_STATUS_OPTIONS } from "../../../config";

export function Filters() {
	const { filters, handleSearchChange, handleStatusChange, handleApplyFilters } = useProductFilters();

	return (
		<div className="bg-white rounded-[20px] p-6">
			<h2 className="text-lg font-medium mb-6">Filtrar</h2>

			<form className="flex flex-col gap-6">
				<div className="flex flex-col gap-1">
					<Input
						id="search"
						type="text"
						placeholder="Pesquisar"
						icon="Search01Icon"
						value={filters.search}
						onChange={handleSearchChange}
					/>
				</div>

				<div className="flex flex-col gap-1">
					<Select
						id="status"
						placeholder="Status"
						icon="SaleTag02Icon"
						options={PRODUCT_STATUS_OPTIONS}
						value={filters.status}
						onChange={handleStatusChange}
					/>
				</div>

				<Button
					label="Aplicar filtro"
					onClick={handleApplyFilters}
					size="md"
					variant="solid"
				/>
			</form>
		</div>
	);
}
