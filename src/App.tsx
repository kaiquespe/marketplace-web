import { QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import queryClient from "./lib/reactquery";
import { router } from "./routes";
import { Toaster } from 'sonner'

export function App() {
	return (
		<HelmetProvider>
			<Helmet titleTemplate="%s | Marketplace" />
			<QueryClientProvider client={queryClient}>
				<Toaster />
				<RouterProvider router={router} />
			</QueryClientProvider>
		</HelmetProvider>
	);
}
