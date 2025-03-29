import { Link } from "react-router-dom";
import { CategoryTag } from "./category-tag";
import { StatusTag } from "./status-tag";

export interface ProductCardProps {
	id: string;
	imageUrl: string;
	title: string;
	description: string;
	price: number;
	status: "available" | "sold" | "cancelled";
	category: string;
}

export function ProductCard({
	id,
	imageUrl,
	title,
	description,
	price,
	status,
	category,
}: ProductCardProps) {
	return (
		<Link to={`/product/${id}`}>
			<div className="bg-white rounded-[20px] overflow-hidden hover:ring-2 hover:ring-orange-base transition-all duration-200">
				<div className="relative">
					<img
						className="w-full h-[200px] object-cover"
						src={imageUrl}
						alt={title}
					/>
					<div className="absolute top-2 right-2 flex gap-1">
						<StatusTag variant={status} />
						<CategoryTag label={category} />
					</div>
				</div>
				<div className="p-4">
					<div className="flex justify-between items-start mb-2">
						<h3 className="text-gray-900 font-medium text-lg line-clamp-1">{title}</h3>
						<div className="flex items-baseline">
							<span className="text-xs font-medium text-gray-500 mr-1">R$</span>
							<span className="text-gray-900 font-bold">{price.toFixed(2)}</span>
						</div>
					</div>
					<p className="text-gray-500 text-sm line-clamp-2">
						{description}
					</p>
				</div>
			</div>
		</Link>
	);
}
