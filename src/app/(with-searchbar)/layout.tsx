import SearchBar from "@/component/searchbar";
import { ReactNode, Suspense } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return(
		<>
			<Suspense fallback={<div>Loading ...</div>}>
				<SearchBar />
			</Suspense>
			{children}
		</>
	)
}