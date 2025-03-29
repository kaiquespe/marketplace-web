import { SaleTag02Icon, Store04Icon, UserMultipleIcon } from "hugeicons-react";
import { Helmet } from "react-helmet-async";
import { VisitorsChart } from "./visitors-chart";
import { Skeleton } from "../../../components/skeleton";
import { useMetrics } from "../../../hooks/useMetrics";

export function Dashboard() {
	const { productsSold, productsAdvertised, views, viewsPerDay, isLoading } = useMetrics();

	return (
		<>
			<Helmet title="Dashboard" />
			<div className="flex flex-col gap-6">
				<section className="flex flex-col gap-6">
					<div className="flex gap-6">
						<div className="flex justify-between items-center gap-2 bg-white py-3 pr-7 pl-3 rounded-[20px]">
							<div className="flex justify-center items-center bg-orange-light rounded-xl w-20 h-[86px] text-orange-dark">
								<SaleTag02Icon size={40} />
							</div>
							<div className="flex flex-col flex-1 gap-2">
								<h2 className="title-lg">
									{isLoading ? (
										<Skeleton width="w-full" height="h-8" />
									) : (
										productsSold?.amount
									)}
								</h2>
								<p className="text-pretty body-xs">Products sold</p>
							</div>
						</div>

						<div className="flex justify-between items-center gap-2 bg-white py-3 pr-7 pl-3 rounded-[20px]">
							<div className="flex justify-center items-center bg-green-light rounded-xl w-20 h-[86px] text-green-dark">
								<Store04Icon size={40} />
							</div>
							<div className="flex flex-col flex-1 gap-2">
								<h2 className="title-lg">
									{isLoading ? (
										<Skeleton width="w-full" height="h-8" />
									) : (
										productsAdvertised?.amount
									)}
								</h2>
								<p className="text-pretty body-xs">Products advertised</p>
							</div>
						</div>

						<div className="flex justify-between items-center gap-2 bg-white py-3 pr-7 pl-3 rounded-[20px]">
							<div className="flex justify-center items-center bg-blue-light rounded-xl w-20 h-[86px] text-blue-dark">
								<UserMultipleIcon size={40} />
							</div>
							<div className="flex flex-col flex-1 gap-2">
								<h2 className="title-lg">
									{isLoading ? (
										<Skeleton width="w-full" height="h-8" />
									) : (
										views?.amount
									)}
								</h2>
								<p className="text-pretty body-xs">Total visitors</p>
							</div>
						</div>
					</div>
					<div className="flex flex-1 bg-white border rounded-[20px]">
						<VisitorsChart data={viewsPerDay?.viewsPerDay || []} />
					</div>
				</section>
			</div>
		</>
	);
}
