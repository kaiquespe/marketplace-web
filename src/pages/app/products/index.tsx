import { useQuery } from "@tanstack/react-query";
import { Loading01Icon } from "hugeicons-react";
import { Helmet } from "react-helmet-async";
import { getSellerProducts } from "../../../api/seller-products";
import { ProductCard } from "../../../components/product-card";
import { Filters } from "./filters";

export function Products() {
	const { data: productsData, isFetching } = useQuery({
		queryKey: ["products", "seller"],
		queryFn: getSellerProducts,
	});

	if (isFetching) {
		return (
			<div className="flex justify-center items-center w-full h-screen">
				<Loading01Icon
					size={40}
					className="w-8 h-8 text-muted-foreground animate-spin"
				/>
			</div>
		);
	}

	return (
		<>
			<Helmet>
				<title>Products</title>
			</Helmet>
			<div className="flex flex-col gap-10 px-32 p-4">
				<section className="flex flex-col gap-2">
					<h1 className="title-md">Your products</h1>
					<p className="body-sm">Explore and manage your products here</p>
				</section>
				<section className="gap-4 grid grid-cols-3">
					<aside className="items-start col-span-1 self-start">
						<Filters />
					</aside>
					<div className="items-start col-span-2">
						<div className="gap-4 grid grid-cols-2">
							{productsData?.data.products?.map((product) => (
								<ProductCard
									id={product.id}
									key={product.id}
									imageUrl={product.attachments[0].url}
									title={product.title}
									description={product.description}
									price={product.priceInCents / 100}
									status={product.status}
									category={product.category.title}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
