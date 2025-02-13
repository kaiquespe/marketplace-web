import { SaleTag02Icon, Store04Icon, UserMultipleIcon } from "hugeicons-react";
import { Helmet } from "react-helmet-async";
import { VisitorsChart } from "./visitors-chart";
import { useQuery } from "@tanstack/react-query";
import { getProductsSold } from "../../../api/products-sold";
import { getProductsAdvertised } from "../../../api/products-advertised";
import { getViews } from "../../../api/views";
import { Skeleton } from "../../../components/skeleton";
import { getViewsPerDay } from "../../../api/views-per-day";

export function Dashboard() {
	const {data: productsSold, isFetching} = useQuery({
		queryKey: ["metrics", "products-sold"],
		queryFn: getProductsSold
	});

	const {data: productsAdvertised} = useQuery({
		queryKey: ["metrics", "products-advertised"],
		queryFn: getProductsAdvertised
	});

	const {data: views} = useQuery({
		queryKey: ["metrics", "views"],
		queryFn: getViews
	});

	const {data: viewsPerDay} = useQuery({
		queryKey: ["metrics", "views-per-day"],
		queryFn: getViewsPerDay
	});

	return (
		<>
			<Helmet>
				<title>Dashboard</title>
			</Helmet>
			<div className="flex flex-col gap-10 px-32 py-10">
				<section className="flex flex-col gap-2 mt-16">
					<h1 className="title-md">Last 30 days</h1>
					<p className="body-sm">Check the last 30 days of your sales</p>
				</section>
				<section className="flex gap-4">
					<div className="gap-4 grid grid-rows-3 w-60">
						<div className="flex justify-between items-center gap-2 bg-white py-3 pr-7 pl-3 rounded-[20px]">
							<div className="flex justify-center items-center bg-blue-light rounded-xl w-20 h-[86px] text-blue-dark">
								<SaleTag02Icon size={40} />
							</div>
							<div className="flex flex-col flex-1 gap-2">
								<h2 className="title-lg">
									{isFetching ? (
										<Skeleton width="w-full" height="h-8" />
									) : (
										productsSold?.data.amount
									)}
								</h2>
								<p className="text-pretty body-xs">Products sold</p>
							</div>
						</div>
						<div className="flex justify-between items-center gap-2 bg-white py-3 pr-7 pl-3 rounded-[20px]">
							<div className="flex justify-center items-center bg-blue-light rounded-xl w-20 h-[86px] text-blue-dark">
								<Store04Icon size={40} />
							</div>
							<div className="flex flex-col flex-1 gap-2">
								<h2 className="title-lg">
									{isFetching ? (
										<Skeleton width="w-full" height="h-8" />
									) : (
										productsAdvertised?.data.amount
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
									{isFetching ? (
										<Skeleton width="w-full" height="h-8" />
									) : (
										views?.data.amount
									)}
								</h2>
								<p className="text-pretty body-xs">Total visitors</p>
							</div>
						</div>
					</div>
					<div className="flex flex-1 bg-white border rounded-[20px]">
						<VisitorsChart data={viewsPerDay?.data.viewsPerDay || []} />
					</div>
				</section>
			</div>
		</>
	);
}
