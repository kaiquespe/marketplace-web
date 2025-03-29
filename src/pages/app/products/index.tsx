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
			<div className="flex flex-col gap-10 px-32 py-10">
				<section className="flex flex-col gap-2 mt-16">
					<h1 className="title-md">Seus produtos</h1>
					<p className="body-sm">Acesse gerencie a sua lista de produtos à venda</p>
				</section>
				<section className="flex gap-8">
					<aside className="w-[280px]">
						<Filters />
					</aside>
					<div className="flex-1">
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
