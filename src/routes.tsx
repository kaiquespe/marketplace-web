import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { ProductForm } from "./pages/app/product/[id]";
import { Products } from "./pages/app/products";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { ErrorPage } from "./pages/error";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/product/:id",
				element: <ProductForm />,
			},
			{
				path: "/product/create",
				element: <ProductForm />,
			},
		],
	},
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{
				path: "/sign-in",
				element: <SignIn />,
			},
			{
				path: "/sign-up",
				element: <SignUp />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
