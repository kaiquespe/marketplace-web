import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { api } from "../services/api";

export function AppLayout() {
	return (
		<div className="bg-background min-h-screen">
			<div className="flex flex-col mx-auto w-full max-w-7xl h-full">
				<Header />
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
