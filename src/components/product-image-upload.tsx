import * as RadixAvatar from "@radix-ui/react-avatar";
import { ImageUploadIcon } from "hugeicons-react";
import { useRef, useState } from "react";

interface ProductImageProps {
	src?: string;
	onFileSelect?: (file: File) => void;
}

export function ProductImageUpload({ src, onFileSelect }: ProductImageProps) {
	const [localSrc, setLocalSrc] = useState<string>();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const finalSrc = localSrc || src;

	function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/"))
			return alert("Please select an image file");
		setLocalSrc(URL.createObjectURL(file));
		onFileSelect?.(file);
	}

	function handleClick() {
		fileInputRef.current?.click();
	}

	return (
		<RadixAvatar.Root
			className="relative flex justify-center items-center bg-shape rounded-xl w-[415px] h-[340px] cursor-pointer overflow-hidden group"
			onClick={handleClick}
		>
			<input
				type="file"
				ref={fileInputRef}
				className="hidden"
				accept="image/png,image/jpeg"
				onChange={handleFileSelect}
			/>
			{finalSrc && (
				<RadixAvatar.Image
					src={finalSrc}
					alt="product image"
					className="group-hover:brightness-50 w-full h-full transition-all duration-200 ease-in-out object-cover"
				/>
			)}
			{finalSrc && (
				<div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ease-in-out">
					<div className="flex flex-col justify-center items-center gap-3 bg-black bg-opacity-50 rounded-xl w-full h-full">
						<ImageUploadIcon className="w-6 h-6 text-white" />
						<p
							className="font-medium text-center text-sm text-white text-opacity-70"
							style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
						>
							Click to upload
							<br />a new image
						</p>
					</div>
				</div>
			)}
			<RadixAvatar.Fallback className="flex justify-center items-center w-full h-full">
				<ImageUploadIcon className="w-6 h-6 text-orange-dark" />
			</RadixAvatar.Fallback>
		</RadixAvatar.Root>
	);
}
