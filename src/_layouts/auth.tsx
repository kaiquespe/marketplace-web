import { Outlet } from "react-router-dom";

export function AuthLayout() {
	return (
		<div className="flex justify-center items-start bg-background w-full min-h-screen">
			<aside className="relative flex flex-col items-start w-1/2 min-h-screen">
				<div className="flex p-10">
					<img src="/logo-full.svg" alt="" />
				</div>
				<div className="absolute inset-0 flex justify-center items-center">
					<img src="/background.png" className="w-[755px] h-[497px]" alt="" />
				</div>
			</aside>
			<main className="flex">
				<div className="flex flex-1 bg-white m-24 p-20 rounded-[32px] max-w-[611px]">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
