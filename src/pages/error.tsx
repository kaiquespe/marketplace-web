import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
	const error = useRouteError() as Error;

	return (
		<>
			<Helmet>
				<title>Error</title>
			</Helmet>
			<div className="flex flex-col justify-center items-center gap-2 h-screen">
				<h1 className="font-bold text-4xl">
					Oops! Looks like we dropped the dough! 🍕
				</h1>
				<div className="flex flex-col items-center gap-2 my-4">
					<p className="text-accent-foreground">
						Something went wrong, and this page isn’t serving up what you
						ordered. We promise it’s not burnt, just… misplaced.
					</p>
					<p className="text-accent-foreground">
						No worries though, our chefs are on it! Scroll down for more
						ingredients—uh, details—about the error. 👇
					</p>
				</div>

				<pre>
					<code>{error.message || JSON.stringify(error)}</code>
				</pre>

				<Link className="text-sky-500 dark:text-sky-400" to="/">
					Go back to Home
				</Link>
			</div>
		</>
	);
}
