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
		<Link to={`/product/${id}`} className="block">
			<div className="border-2 border-white hover:border-2 bg-white p-1 hover:border-blue-base rounded-[20px] max-w-sm max-h-60 transition-all duration-200">
				<div className="relative">
					<img
						className="rounded-[20px] w-full h-32 object-cover"
						src={imageUrl}
						alt={title}
					/>
					<div className="top-0 right-0 absolute flex gap-2 mt-2 mr-2">
						<StatusTag variant={status} />
						<CategoryTag label={category} />
					</div>
				</div>
				<div className="p-3">
					<div className="flex justify-between items-center">
						<h3 className="text-gray-400 subtitle">{title}</h3>
						<div className="flex items-baseline gap-1">
							<span className="text-gray-500 label-md">$</span>
							<p className="font-bold font-dm-sans text-gray-500 text-lg">
								{price.toFixed(2)}
							</p>
						</div>
					</div>
					<div>
						<p className="line-clamp-2 text-gray-300 text-pretty overflow-hidden body-sm">
							{description}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
