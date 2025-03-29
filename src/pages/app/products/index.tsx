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
			<Helmet title="Produtos" />
			<div className="flex flex-col gap-10 p-4 sm:p-6 md:p-8 lg:px-32 lg:py-10">
				<section className="flex flex-col gap-2 mt-8 lg:mt-16">
					<h1 className="title-md">Seus produtos</h1>
					<p className="body-sm">Acesse gerencie a sua lista de produtos à venda</p>
				</section>
				<section className="flex flex-col lg:flex-row gap-8">
					<aside className="w-full lg:w-[280px]">
						<Filters />
					</aside>
					<div className="flex-1">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
