import * as RadixAvatar from "@radix-ui/react-avatar";
import { ImageUploadIcon } from "hugeicons-react";
import { useRef, useState } from "react";

interface AvatarProps {
	src?: string;
	onFileSelect?: (file: File) => void;
}

export function AvatarUpload({ src: externalSrc, onFileSelect }: AvatarProps) {
	const [localSrc, setLocalSrc] = useState<string>();
	const fileInputRef = useRef<HTMLInputElement>(null);
	const src = localSrc || externalSrc;

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		if (!file.type.startsWith("image/")) {
			alert("Please select an image file");
			return;
		}

		const objectUrl = URL.createObjectURL(file);
		setLocalSrc(objectUrl);
		onFileSelect?.(file);
	};

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<RadixAvatar.Root
			className="relative flex justify-center items-center bg-shape rounded-xl w-32 h-32 cursor-pointer overflow-hidden group"
			onClick={handleClick}
		>
			<input
				type="file"
				ref={fileInputRef}
				className="hidden"
				accept="image/png,image/jpeg"
				onChange={handleFileSelect}
			/>
			{src && (
				<RadixAvatar.Image
					src={src}
					alt="avatar"
					className="group-hover:brightness-50 w-full h-full transition-all duration-200 ease-in-out object-cover"
				/>
			)}
			{src && (
				<div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ease-in-out">
					<ImageUploadIcon className="w-6 h-6 text-white" />
				</div>
			)}
			<RadixAvatar.Fallback className="flex justify-center items-center w-full h-full">
				<ImageUploadIcon className="w-6 h-6 text-orange-dark" />
			</RadixAvatar.Fallback>
		</RadixAvatar.Root>
	);
}
