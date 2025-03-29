import { Outlet } from "react-router-dom";

export function AuthLayout() {
	return (
		<div className="flex w-full min-h-screen bg-gray-50">
			<aside className="relative flex flex-col items-start w-1/2 min-h-screen bg-white">
				<div className="flex p-8">
					<img src="/logo-full.svg" alt="Marketplace" className="h-8" />
				</div>
				<div className="absolute inset-0 flex justify-center items-center">
					<img src="/background.png" className="w-[755px] h-[497px] object-contain" alt="" />
				</div>
			</aside>
			<main className="flex flex-1 justify-center items-center p-8">
				<div className="w-full max-w-[480px]">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
